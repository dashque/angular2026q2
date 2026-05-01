import { TestBed } from '@angular/core/testing';

import { FilmRepositoryService } from './film-repository.service';
import type { TestRequest } from '@angular/common/http/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationRef } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { FILMS_URL } from '../constants/films-url';
import { filmListFixture } from '../fixtures/film-list.fixture';
import { favoriteFilmFixture } from '../fixtures/favorite-film.fixture';
import { filmFixture } from '../fixtures/film.fixture';
import { SearchFormService } from '../../search-form/search-form.service';
import { searchFormServiceMock } from '../../search-form/search-form.service.mock';

describe('FilmRepositoryService', () => {
  let service: FilmRepositoryService;
  let backendMock: HttpTestingController;
  let getRequestFixture: TestRequest;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: SearchFormService, useValue: searchFormServiceMock },
      ],
    });
    service = TestBed.inject(FilmRepositoryService);
    backendMock = TestBed.inject(HttpTestingController);
    TestBed.tick();
    getRequestFixture = backendMock.expectOne(FILMS_URL);
    getRequestFixture.flush(filmListFixture);
    await TestBed.inject(ApplicationRef).whenStable();
  });

  afterEach(() => {
    backendMock.verify();
  });

  it('должен инициализироваться', () => {
    expect(service).toBeTruthy();
  });

  describe('Получение фильмов', () => {
    it('должен выполнить запрос', async () => {
      expect(getRequestFixture.request.method).toBe('GET');
    });

    it('должен вернуть список фильмов', () => {
      expect(service.filmList()).toEqual(filmListFixture);
    });
  });

  describe('Получение избранных фильмов', () => {
    it('должен вернуть только избранные фильмы', () => {
      expect(service.favoriteFilmsList()).toEqual([favoriteFilmFixture]);
    });
  });

  describe('Получение деталей фильма', () => {
    describe('Фильм найден', () => {
      it('должен вернуть фильм', async () => {
        const resultPromise = firstValueFrom(service.getFilmDetails(filmFixture.id));
        const detailsRequestFixture = backendMock.expectOne(`${FILMS_URL}/${filmFixture.id}`);

        detailsRequestFixture.flush(filmFixture);

        await expect(resultPromise).resolves.toEqual(filmFixture);
      });
    });

    describe('Фильм не найден', () => {
      it('должен отклонить запрос с кодом 404', async () => {
        const resultPromise = firstValueFrom(service.getFilmDetails(999999999));
        const detailsRequestFixture = backendMock.expectOne(`${FILMS_URL}/999999999`);

        detailsRequestFixture.flush(null, { status: 404, statusText: 'Not Found' });

        await expect(resultPromise).rejects.toMatchObject({ status: 404 });
      });
    });
  });

  describe('Изменение избранного статуса', () => {
    let patchRequestFixture: TestRequest;

    beforeEach(() => {
      service.toggleFavorite(favoriteFilmFixture.id);
      patchRequestFixture = backendMock.expectOne(`${FILMS_URL}/${favoriteFilmFixture.id}`);
      patchRequestFixture.flush({ ...favoriteFilmFixture, isFavorite: true });
    });
    describe('Фильм найден', () => {
      it('должен выполнить запрос', () => {
        expect(patchRequestFixture.request.method).toBe('PATCH');
      });

      it('должен изменить статус избранного фильма', () => {
        expect(patchRequestFixture.request.body).toEqual({ isFavorite: true });
      });
    });

    describe('Фильм не найден', () => {
      it('не должен выполнить запрос', () => {
        const unknownFilmIdFixture = 999_999;

        service.toggleFavorite(unknownFilmIdFixture);
        backendMock.expectNone(`${FILMS_URL}/${unknownFilmIdFixture}`);
      });
    });
  });
});
