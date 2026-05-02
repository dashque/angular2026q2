import { computed, inject, Injectable } from '@angular/core';
import { SearchFormService } from '../../services/search-form/services/search-form.service';
import { FilmRepositoryService } from '../../services/film-repository/services/film-repository.service';
import type { Film } from '../../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmListFacade {
  private readonly searchFormService = inject(SearchFormService);
  private readonly filmRepositoryService = inject(FilmRepositoryService);
  private readonly _filmListResourceRef = this.filmRepositoryService.filmListResourceRef;
  public readonly searchForm = this.searchFormService.searchForm.controls;
  public readonly isLoading = this.filmRepositoryService.filmListResourceRef.isLoading;
  public readonly filmList = computed(() => {
    const filter = this.searchFormService.searchFieldValueChanges().trim().toLowerCase();

    if (!filter) {
      return this._filmListResourceRef.value();
    }

    return this._filmListResourceRef.value().filter((film: Film) => {
      return film.title.toLowerCase().includes(filter);
    });
  });

  public toggleFavorite(id: number): void {
    this.filmRepositoryService.toggleFavorite(id);
  }
}
