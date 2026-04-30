import type { UrlTree } from '@angular/router';
import { type ResolveFn, Router } from '@angular/router';
import type { Film } from '../models/film.model';
import { inject } from '@angular/core';
import { FilmRepositoryService } from '../services/film-repository/services/film-repository.service';

// @ts-expect-error-next-line
export const filmDetailsDataResolver: ResolveFn<Film | UrlTree> = (activatedRouteSnapshot) => {
  const filmId = activatedRouteSnapshot.paramMap.get('id');
  const filmRepositoryService = inject(FilmRepositoryService);
  const router = inject(Router);

  return filmId ? filmRepositoryService.getFilmDetails(Number(filmId)) : router.navigate(['**']);
};
