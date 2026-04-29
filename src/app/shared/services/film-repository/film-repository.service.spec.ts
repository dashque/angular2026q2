import { TestBed } from '@angular/core/testing';

import { FilmRepositoryService } from './film-repository.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationRef } from '@angular/core';
import { FILMS_URL } from '../constants/films-url';
import { filmListFixture } from '../fixtures/film-list.fixture';
import { favoriteFilmFixture } from '../fixtures/favorite-film.fixture';

describe('FilmRepositoryService', () => {
  let service: FilmRepositoryService;
  let backendMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(FilmRepositoryService);
    backendMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    backendMock.verify();
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });

  describe('Получение фильмов', () => {
    it('должен выполнить запрос', async () => {
      TestBed.tick();
      const requestFixture = backendMock.expectOne(FILMS_URL);

      expect(requestFixture.request.method).toBe('GET');
      requestFixture.flush(filmListFixture);
    });

    it('должен вернуть список фильмов', async () => {
      TestBed.tick();
      const requestFixture = backendMock.expectOne(FILMS_URL);

      requestFixture.flush(filmListFixture);
      await TestBed.inject(ApplicationRef).whenStable();

      expect(service.filmList()).toEqual(filmListFixture);
    });
  });

  describe('Получение избранных фильмов', () => {
    it('должен вернуть только избранные фильмы', async () => {
      TestBed.tick();
      const requestFixture = backendMock.expectOne(FILMS_URL);

      requestFixture.flush(filmListFixture);
      await TestBed.inject(ApplicationRef).whenStable();

      expect(service.favoriteFilmsList()).toEqual([favoriteFilmFixture]);
    });
  });
});
