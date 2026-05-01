import { TestBed } from '@angular/core/testing';
import type { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { FilmRepositoryService } from '../services/film-repository/services/film-repository.service';
import { filmDetailsDataResolver } from './film-details-data.resolver';
import { routerMock } from '../mocks/router/router.mock';
import { filmRepositoryServiceMock } from '../services/film-repository/services/film-repository.service.mock';
import { activatedRouteSnapshotMock } from '../mocks/activated-route/activated-route-snapshot.mock';
import type { HttpResourceRef } from '@angular/common/http';
import type { Film } from '../models/film.model';
import { filmFixture } from '../services/film-repository/fixtures/film.fixture';

describe('filmDetailsDataResolver', () => {
  const validSnapshotFixture = {
    paramMap: {
      get: jest.fn(() => {
        return '1';
      }),
    },
  } as unknown as ActivatedRouteSnapshot;

  beforeEach(() => {
    jest.clearAllMocks();
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: FilmRepositoryService, useValue: filmRepositoryServiceMock },
      ],
    });
  });

  describe('Id валидный', () => {
    let result: MaybeAsync<UrlTree | HttpResourceRef<Film | null> | RedirectCommand>;

    beforeEach(() => {
      result = TestBed.runInInjectionContext(() => {
        return filmDetailsDataResolver(validSnapshotFixture);
      });
    });

    it('должен вернуть вернуть undefined', () => {
      expect(result).toBe(filmFixture);
    });

    it('должен вызывать метод репозитория', () => {
      expect(filmRepositoryServiceMock.getFilmDetails).toHaveBeenNthCalledWith(1, 1);
    });

    it('не должен перенаправить на главную страницу', () => {
      expect(routerMock.createUrlTree).not.toHaveBeenCalled();
    });
  });

  describe('Id отсутствует', () => {
    let result: MaybeAsync<UrlTree | HttpResourceRef<Film | null> | RedirectCommand>;

    beforeEach(() => {
      result = TestBed.runInInjectionContext(() => {
        return filmDetailsDataResolver(activatedRouteSnapshotMock);
      });
    });

    it('должен вернуть вернуть undefined', () => {
      expect(result).toBeUndefined();
    });

    it('должен перенаправить на главную страницу', () => {
      expect(routerMock.createUrlTree).toHaveBeenNthCalledWith(1, ['/']);
    });

    it('не должен вызывать метод репозитория', () => {
      expect(filmRepositoryServiceMock.getFilmDetails).not.toHaveBeenCalled();
    });
  });

  describe('Id не является числом', () => {
    let result: MaybeAsync<UrlTree | HttpResourceRef<Film | null> | RedirectCommand>;
    const snapshotFixture = {
      paramMap: {
        get: jest.fn(() => {
          return 'abc';
        }),
      },
    } as unknown as ActivatedRouteSnapshot;

    beforeEach(() => {
      result = TestBed.runInInjectionContext(() => {
        return filmDetailsDataResolver(snapshotFixture);
      });
    });

    it('должен вернуть вернуть undefined', () => {
      expect(result).toBeUndefined();
    });

    it('должен перенаправить на главную страницу', () => {
      expect(routerMock.createUrlTree).toHaveBeenNthCalledWith(1, ['/']);
    });

    it('не должен вызывать метод репозитория', () => {
      expect(filmRepositoryServiceMock.getFilmDetails).not.toHaveBeenCalled();
    });
  });

  describe('Сервис вернул пустой результат', () => {
    let result: MaybeAsync<UrlTree | HttpResourceRef<Film | null> | RedirectCommand>;

    beforeEach(() => {
      filmRepositoryServiceMock.getFilmDetails.mockReturnValueOnce(null);
      result = TestBed.runInInjectionContext(() => {
        return filmDetailsDataResolver(validSnapshotFixture);
      });
    });

    it('должен вернуть вернуть undefined', () => {
      expect(result).toBeUndefined();
    });

    it('должен вызывать метод репозитория', () => {
      expect(filmRepositoryServiceMock.getFilmDetails).toHaveBeenNthCalledWith(1, 1);
    });

    it('должен перенаправить на главную страницу', () => {
      expect(routerMock.createUrlTree).toHaveBeenNthCalledWith(1, ['/']);
    });
  });
});
