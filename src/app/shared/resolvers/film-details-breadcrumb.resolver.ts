import type { ActivatedRouteSnapshot } from '@angular/router';
import { type ResolveFn, UrlTree } from '@angular/router';
import type { Film } from '../models/film.model';

// TODO add tests
export const filmDetailsBreadcrumbResolver: ResolveFn<string> = (snapshot: ActivatedRouteSnapshot) => {
  const film = snapshot.data['film'] as Film | UrlTree | undefined;

  if (!film || film instanceof UrlTree) {
    return 'Details';
  }

  return film.title || 'Details';
};
