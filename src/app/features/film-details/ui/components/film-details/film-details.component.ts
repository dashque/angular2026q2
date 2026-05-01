import { Component, input } from '@angular/core';
import type { Film } from '../../../../../shared/models/film.model';
import { NgOptimizedImage } from '@angular/common';
import { DurationPipe } from '../../../../../shared/pipes/duration/duration.pipe';
import { RouterLink } from '@angular/router';
import { FavoriteDirective } from '../../../../../shared/directives/favorite/favorite.directive';

@Component({
  selector: 'dashq-film-details',
  imports: [NgOptimizedImage, DurationPipe, RouterLink, FavoriteDirective],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
})
export class FilmDetailsComponent {
  //Film Details Page
  // Breadcrumbs: Home > Film Title
  // ("Home" is a clickable link, "Film Title" is the current page and is not clickable.)
  public readonly film = input.required<Film>();
}
