import { Component, inject, input } from '@angular/core';
import type { Film } from '../../../../../shared/models/film.model';
import { NgOptimizedImage } from '@angular/common';
import { DurationPipe } from '../../../../../shared/pipes/duration/duration.pipe';
import { RouterLink } from '@angular/router';
import { FilmRepositoryService } from '../../../../../shared/services/film-repository/services/film-repository.service';

@Component({
  selector: 'dashq-film-details',
  imports: [NgOptimizedImage, DurationPipe, RouterLink],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
})
export class FilmDetailsComponent {
  //Film Details Page
  //
  // There is a "Back" button to return to the film list.
  // Breadcrumbs: Home > Film Title
  //
  // ("Home" is a clickable link, "Film Title" is the current page and is not clickable.)

  public readonly fallbackPosterUrl = 'https://placehold.co/300x300?text=No+Poster';
  public readonly film = input.required<Film>();
  private readonly filmRepository = inject(FilmRepositoryService);

  public onAddFavouriteClick(id: number) {
    this.filmRepository.toggleFavorite(id);
  }
}
