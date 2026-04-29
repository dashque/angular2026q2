import { computed, inject, Injectable } from '@angular/core';

import type { Film } from '../../models/film.model';
import { httpResource } from '@angular/common/http';
import { FILMS_URL_TOKEN } from '../constants/films-url.token';

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
  private url = inject(FILMS_URL_TOKEN);
  private readonly _filmListResourceRef = httpResource<Film[]>(() => this.url, { defaultValue: [] });
  public readonly favoriteFilmsList = computed(() => {
    return this._filmListResourceRef.value().filter((film: Film) => {
      return film.isFavorite;
    });
  });
  public readonly filmList = computed(() => this._filmListResourceRef.value());
  public readonly isLoading = this._filmListResourceRef.isLoading;
  public readonly error = this._filmListResourceRef.error;

  public filmDetails!: Film;

  public toggleFavorite(id: number) {}
}
