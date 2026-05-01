import { Component, input, output } from '@angular/core';
import type { Film } from '../../../../../../shared/models/film.model';
import { NgOptimizedImage } from '@angular/common';
import { FavoriteDirective } from '../../../../../../shared/directives/favorite.directive';

@Component({
  selector: 'dashq-film-card',
  imports: [NgOptimizedImage, FavoriteDirective],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
  host: {
    '(click)': 'cardClicked.emit(this.film().id)',
  },
})
export class FilmCardComponent {
  public readonly film = input.required<Film>();
  public readonly cardClicked = output<number>();
}
