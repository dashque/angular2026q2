import { computed, Injectable } from '@angular/core';

import type { Film } from '../../models/film.model';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmRepositoryService {
  //Service
  // Create a service for working with film data:
  //
  // Stores the film collection in a signal
  // Provides access to all films
  // Allows getting a film by id
  // Allows toggling a film's favorite status
  // Provides a computed list of favorite films
  // Registered globally (singleton)

  //Signals
  // All reactive data in the application is stored and processed via Angular Signals:
  //
  // Film collection in the service — signal()
  // Favorites list — computed()

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

  public toggleFavorite(id: number) {
    console.log(id);
  }
}
