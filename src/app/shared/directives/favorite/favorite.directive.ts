import { computed, Directive, inject, input } from '@angular/core';
import type { Film } from '../../models/film.model';
import { FilmListFacade } from '../../facades/film-list/film-list.facade';

@Directive({
  selector: '[dashqFavorite]',
  host: {
    '(click)': 'onAddFavouriteClick($event)',
    '[class.favorite]': 'isFavorite()',
    '[attr.data-favorite-icon]': 'favoriteIcon()',
  },
})
export class FavoriteDirective {
  private readonly filmListFacade = inject(FilmListFacade);
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

    this.filmListFacade.toggleFavorite(film.id);
  }
}
