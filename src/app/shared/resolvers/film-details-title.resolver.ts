import { ResolveFn } from '@angular/router';
import { Film } from '../models/film.model';

// TODO доработать
export const filmDetailsTitleResolver: ResolveFn<string> = (activatedRouteSnapshot) => {
  const film: Film = activatedRouteSnapshot.parent?.data['film'];

  return film ? `${film.title}${film.year}` : 'Film Details';
};
