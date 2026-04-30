import { computed, inject, Injectable } from '@angular/core';

import type { Film } from '../../../models/film.model';
import { HttpClient, httpResource } from '@angular/common/http';
import { FILMS_URL_TOKEN } from '../constants/films-url.token';

@Injectable({
  providedIn: 'root',
})
export class FilmRepositoryService {
  private readonly httpClient = inject(HttpClient);
  private readonly url = inject(FILMS_URL_TOKEN);
  private readonly _filmListResourceRef = httpResource<Film[]>(() => this.url, { defaultValue: [] });
  public readonly favoriteFilmsList = computed(() => {
    return this._filmListResourceRef.value().filter((film: Film) => {
      return film.isFavorite;
    });
  });
  public readonly filmList = computed(() => this._filmListResourceRef.value());
  public readonly isLoading = this._filmListResourceRef.isLoading;
  public readonly error = this._filmListResourceRef.error;

  public toggleFavorite(id: number) {
    const film = this.filmList().find((item: Film) => {
      return item.id === id;
    });

    if (!film) {
      return;
    }

    this.httpClient.patch<Film>(`${this.url}/${id}`, { isFavorite: !film.isFavorite }).subscribe(() => {
      this._filmListResourceRef.reload();
    });
  }

  public getFilmDetails(id: number) {
    return this._filmListResourceRef.value().find((film) => film.id === id);
  }
}
