import { computed, Injectable } from '@angular/core';

import type { Film } from '../../models/film.model';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmRepositoryService {
  public readonly filmsList = httpResource<Film[]>(
    () => 'https://cdn.jsdelivr.net/gh/rolling-scopes-school/tasks@master/angular/tasks/angular-intro-task/films.json',
    { defaultValue: [] }
  );
  public readonly favoriteFilmsList = computed(() => {
    return this.filmsList.value().filter((film: Film) => {
      return film.isFavorite;
    });
  });

  public filmDetails!: Film;

  public toggleFavorite(id: number) {}
}
