import type { ResolveFn } from '@angular/router';
import type { Film } from '../models/film.model';

// TODO доработать
export const filmDetailsDataResolver: ResolveFn<Film> = (activatedRouteSnapshot) => {
  const film = activatedRouteSnapshot.parent?.data['film'] as Film;

  return film;
};
