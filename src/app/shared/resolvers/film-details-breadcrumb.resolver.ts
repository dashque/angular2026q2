import type { ActivatedRouteSnapshot } from '@angular/router';
import { type ResolveFn } from '@angular/router';
import type { HttpResourceRef } from '@angular/common/http';
import type { Film } from '../models/film.model';

// TODO add tests
export const filmDetailsBreadcrumbResolver: ResolveFn<string> = (snapshot: ActivatedRouteSnapshot) => {
  const filmResourceReference = snapshot.data['film'] as HttpResourceRef<Film | null> | undefined;
  const film = filmResourceReference?.value();

  if (!film) {
    return 'Details';
  }

  return film.title || 'Details';
};
