import { Component, input } from '@angular/core';
import { Film } from '../../../../../../shared/models/film.model';

@Component({
  selector: 'dashq-film-card',
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
})
export class FilmCardComponent {
  public film = input.required<Film>();
}
