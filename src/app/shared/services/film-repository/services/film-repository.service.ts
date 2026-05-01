import { computed, inject, Injectable, signal } from '@angular/core';

import type { Film } from '../../../models/film.model';
import { HttpClient, httpResource, type HttpResourceRef } from '@angular/common/http';
import { FILMS_URL_TOKEN } from '../constants/films-url.token';
import { SearchFormService } from '../../search-form/search-form.service';

@Injectable({
  providedIn: 'root',
})
export class FilmRepositoryService {
  private readonly httpClient = inject(HttpClient);
  private readonly url = inject(FILMS_URL_TOKEN);
  private readonly searchFormService = inject(SearchFormService);
  private readonly _selectedFilmId = signal<number | null>(null);
  private readonly _filmListResourceRef = httpResource<Film[]>(() => this.url, { defaultValue: [] });
  private readonly _selectedFilmResourceRef = httpResource<Film | null>(
    () => {
      const selectedFilmId = this._selectedFilmId();

      if (selectedFilmId === null) {
        return undefined;
      }

      return `${this.url}/${selectedFilmId}`;
    },
    { defaultValue: null }
  );
  public readonly favoriteFilmsList = computed(() => {
    return this._filmListResourceRef.value().filter((film: Film) => {
      return film.isFavorite;
    });
  });
  public readonly filmList = computed(() => {
    const filter = this.searchFormService.searchFieldValueChanges().trim().toLowerCase();

    if (!filter) {
      return this._filmListResourceRef.value();
    }

    return this._filmListResourceRef.value().filter((film: Film) => {
      return film.title.toLowerCase().includes(filter);
    });
  });
  public readonly isLoading = this._filmListResourceRef.isLoading;
  public readonly selectedFilm = computed(() => {
    return this._selectedFilmResourceRef.value();
  });
  public readonly searchForm = this.searchFormService.searchForm;

  public toggleFavorite(id: number): void {
    const detailsFilm = this.selectedFilm();
    const listFilm = this.filmList().find((item: Film) => {
      return item.id === id;
    });
    const film = detailsFilm?.id === id ? detailsFilm : listFilm;

    if (!film) {
      return;
    }

    this.httpClient.patch<Film>(`${this.url}/${id}`, { isFavorite: !film.isFavorite }).subscribe(() => {
      this._filmListResourceRef.reload();

      if (detailsFilm?.id === id) {
        this._selectedFilmResourceRef.reload();
      }
    });
  }

  public getFilmDetails(id: number): HttpResourceRef<Film | null> {
    this._selectedFilmId.set(id);

    return this._selectedFilmResourceRef;
  }
}
