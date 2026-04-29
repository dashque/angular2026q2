import type { ResolveFn } from '@angular/router';
import type { Film } from '../models/film.model';

// TODO доработать
export const filmDetailsTitleResolver: ResolveFn<string> = (activatedRouteSnapshot) => {
  const film = activatedRouteSnapshot.parent?.data['film'] as Film;

  return film ? `${film.title}${film.year}` : 'Film Details';
};
