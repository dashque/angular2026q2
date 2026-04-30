import type { UrlTree } from '@angular/router';
import { type ResolveFn, Router } from '@angular/router';
import type { Film } from '../models/film.model';
import { inject } from '@angular/core';
import { FilmRepositoryService } from '../services/film-repository/services/film-repository.service';

export const filmDetailsDataResolver: ResolveFn<Film | UrlTree> = (activatedRouteSnapshot) => {
  const filmId = activatedRouteSnapshot.paramMap.get('id');
  const filmRepositoryService = inject(FilmRepositoryService);
  const router = inject(Router);
  const parsedFilmId = Number(filmId);

  if (!filmId || !Number.isFinite(parsedFilmId)) {
    return router.createUrlTree(['/']);
  }

  return filmRepositoryService.getFilmDetails(parsedFilmId);
};
