import { TestBed } from '@angular/core/testing';

import { FilmListFacade } from './film-list.facade';
import { FilmRepositoryService } from '../../services/film-repository/services/film-repository.service';
import { filmRepositoryServiceMock } from '../../services/film-repository/services/film-repository.service.mock';
import { SearchFormService } from '../../services/search-form/services/search-form.service';
import { searchFormServiceMock } from '../../services/search-form/services/search-form.service.mock';
import { filmListFixture } from '../../services/film-repository/fixtures/film-list.fixture';
import { filmFixture } from '../../services/film-repository/fixtures/film.fixture';
import { favoriteFilmFixture } from '../../services/film-repository/fixtures/favorite-film.fixture';
import { resourceValueMock } from '../../mocks/http-resource/resource-value.mock';

describe('FilmListFacade', () => {
  let facade: FilmListFacade;

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        FilmListFacade,
        { provide: FilmRepositoryService, useValue: filmRepositoryServiceMock },
        { provide: SearchFormService, useValue: searchFormServiceMock },
      ],
    });

    facade = TestBed.inject(FilmListFacade);
  });

  it('должен инициализироваться', () => {
    expect(facade).toBeTruthy();
  });

  describe('Получение списка фильмов', () => {
    describe('Строка поиска пустая', () => {
      it('должен возвращать полный список фильмов', () => {
        searchFormServiceMock.searchFieldValueChanges.mockReturnValue('');
        const result = facade.filmList();

        expect(result).toEqual([...filmListFixture]);
      });
    });

    describe('Строка поиска не пустая', () => {
      describe('Совпадений нет', () => {
        it('должен возвращать пустой массив', () => {
          searchFormServiceMock.searchFieldValueChanges.mockReturnValue('aboba');
          expect(facade.filmList()).toEqual([]);
        });
      });

      describe('Совпадения есть', () => {
        it('должен возвращать только фильмы, подходящие под поиск', () => {
          resourceValueMock.mockReturnValue([filmFixture, favoriteFilmFixture]);
          searchFormServiceMock.searchFieldValueChanges.mockReturnValue('  INCEp ');

          expect(facade.filmList()).toEqual([favoriteFilmFixture]);
        });
      });
    });
  });

  describe('Изменение избранного статуса', () => {
    it('должен вызвать соответствующий метод репозитория', () => {
      facade.toggleFavorite(1);

      expect(filmRepositoryServiceMock.toggleFavorite).toHaveBeenNthCalledWith(1, 1);
    });
  });
});
