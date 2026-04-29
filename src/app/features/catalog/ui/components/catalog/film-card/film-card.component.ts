import { Component, input, output } from '@angular/core';
import { Film } from '../../../../../../shared/models/film.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'dashq-film-card',
  imports: [NgOptimizedImage],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
  host: {
    '(click)': 'onCardClick()',
  },
})
export class FilmCardComponent {
  public film = input.required<Film>();
  public cardClicked = output<number>();

  public onCardClick() {
    console.log('clicked onCardClick');
    this.cardClicked.emit(this.film().id);
  }
}
