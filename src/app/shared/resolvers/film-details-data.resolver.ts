import { ResolveFn } from '@angular/router';
import { Film } from '../models/film.model';

// TODO доработать
export const filmDetailsDataResolver: ResolveFn<Film> = (activatedRouteSnapshot) => {
  const film: Film = activatedRouteSnapshot.parent?.data['film'];

  return film;
};
