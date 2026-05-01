import { computed, Directive, inject, input } from '@angular/core';
import { FilmRepositoryService } from '../services/film-repository/services/film-repository.service';
import type { Film } from '../models/film.model';

@Directive({
  selector: '[dashqFavorite]',
  host: {
    '(click)': 'onAddFavouriteClick($event)',
    '[class.favorite]': 'isFavorite()',
    '[attr.data-favorite-icon]': 'favoriteIcon()',
  },
})
export class FavoriteDirective {
  private readonly filmRepositoryService = inject(FilmRepositoryService);
  public readonly film = input<Film | null>(null, {
    alias: 'dashqFavorite',
  });
  public readonly isFavorite = computed(() => {
    return this.film()?.isFavorite ?? false;
  });
  public readonly favoriteIcon = computed(() => {
    return this.isFavorite() ? '♥' : '♡';
  });

  public onAddFavouriteClick(event: MouseEvent): void {
    event.stopPropagation();
    const film = this.film();

    if (!film) {
      return;
    }

    this.filmRepositoryService.toggleFavorite(film.id);
  }
}
