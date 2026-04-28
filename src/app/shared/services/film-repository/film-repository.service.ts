import { computed, Injectable, signal } from '@angular/core';

import type { Film } from '../../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmRepositoryService {
  private readonly _films = signal<Film[]>([]);
  public readonly films = this._films.asReadonly();
  public readonly favoriteFilms = computed(() => {
    return this._films().filter((film: Film) => {
      return film.isFavorite;
    });
  });

  public getFilmList() {}

  public getFilmById(id: number) {}

  public toggleFavorite(id: number) {}
}
