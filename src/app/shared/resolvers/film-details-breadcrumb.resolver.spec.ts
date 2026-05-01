import type { ActivatedRouteSnapshot } from '@angular/router';
import type { HttpResourceRef } from '@angular/common/http';

import type { Film } from '../models/film.model';
import { filmFixture } from '../services/film-repository/fixtures/film.fixture';
import { filmDetailsBreadcrumbResolver } from './film-details-breadcrumb.resolver';

describe('filmDetailsBreadcrumbResolver', () => {
  it('должен вернуть Details если ресурс фильма отсутствует', () => {
    const snapshotFixture = {
      data: {},
    } as unknown as ActivatedRouteSnapshot;

    const result = filmDetailsBreadcrumbResolver(snapshotFixture);

    expect(result).toBe('Details');
  });

  it('должен вернуть Details если ресурс фильма возвращает null', () => {
    const filmResourceReferenceWithoutFilmFixture = {
      value: () => {
        return null;
      },
    } as HttpResourceRef<Film | null>;

    const snapshotFixture = {
      data: {
        film: filmResourceReferenceWithoutFilmFixture,
      },
    } as unknown as ActivatedRouteSnapshot;

    const result = filmDetailsBreadcrumbResolver(snapshotFixture);

    expect(result).toBe('Details');
  });

  it('должен вернуть Details если title фильма пустой', () => {
    const filmResourceReferenceWithFilmAndTitleFixture = {
      value: () => {
        return {
          ...filmFixture,
          title: '',
        };
      },
    } as HttpResourceRef<Film | null>;

    const snapshotFixture = {
      data: {
        film: filmResourceReferenceWithFilmAndTitleFixture,
      },
    } as unknown as ActivatedRouteSnapshot;

    const result = filmDetailsBreadcrumbResolver(snapshotFixture);

    expect(result).toBe('Details');
  });

  it('должен вернуть title фильма', () => {
    const filmResourceReferenceWithFilmFixture = {
      value: () => {
        return {
          ...filmFixture,
        };
      },
    } as HttpResourceRef<Film | null>;

    const snapshotFixture = {
      data: {
        film: filmResourceReferenceWithFilmFixture,
      },
    } as unknown as ActivatedRouteSnapshot;

    const result = filmDetailsBreadcrumbResolver(snapshotFixture);

    expect(result).toBe(filmFixture.title);
  });
});
