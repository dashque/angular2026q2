import { computed, inject, Injectable, signal } from '@angular/core';

import type { Film } from '../../../models/film.model';
import { HttpClient, httpResource, type HttpResourceRef } from '@angular/common/http';
import { FILMS_URL_TOKEN } from '../constants/films-url.token';

@Injectable({
  providedIn: 'root',
})
export class FilmRepositoryService {
  private readonly httpClient = inject(HttpClient);
  private readonly url = inject(FILMS_URL_TOKEN);
  private readonly _selectedFilmId = signal<number | null>(null);
  private readonly _selectedFilm = computed(() => {
    return this._selectedFilmResourceRef.value();
  });
  private readonly _selectedFilmResourceRef = httpResource<Film | null>(
    () => {
      const selectedFilmId = this._selectedFilmId();

      if (selectedFilmId === null) {
        return;
      }

      return `${this.url}/${selectedFilmId}`;
    },
    { defaultValue: null }
  );

  public readonly filmListResourceRef = httpResource<Film[]>(() => this.url, { defaultValue: [] });

  public toggleFavorite(id: number): void {
    const filmDetails = this._selectedFilm();
    const filmList = this.filmListResourceRef.value().find((item: Film) => {
      return item.id === id;
    });
    const film = filmDetails?.id === id ? filmDetails : filmList;

    if (!film) {
      return;
    }

    this.httpClient.patch<Film>(`${this.url}/${id}`, { isFavorite: !film.isFavorite }).subscribe({
      next: () => {
        this.filmListResourceRef.reload();

        if (filmDetails?.id === id) {
          this._selectedFilmResourceRef.reload();
        }
      },
      error: () => {
        this.filmListResourceRef.reload();

        if (filmDetails?.id === id) {
          this._selectedFilmResourceRef.reload();
        }
      },
    });
  }

  public getFilmDetails(id: number): HttpResourceRef<Film | null> {
    this._selectedFilmId.set(id);

    return this._selectedFilmResourceRef;
  }
}
