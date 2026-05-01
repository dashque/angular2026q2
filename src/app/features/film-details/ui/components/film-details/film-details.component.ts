import { Component, inject, input } from '@angular/core';
import type { Film } from '../../../../../shared/models/film.model';
import { NgOptimizedImage } from '@angular/common';
import { DurationPipe } from '../../../../../shared/pipes/duration/duration.pipe';
import { RouterLink } from '@angular/router';
import { FilmRepositoryService } from '../../../../../shared/services/film-repository/services/film-repository.service';
import { LoaderDirective } from '../../../../../shared/directives/loader/loader.directive';
import { FavoriteDirective } from '../../../../../shared/directives/favorite/favorite.directive';

@Component({
  selector: 'dashq-film-details',
  imports: [NgOptimizedImage, DurationPipe, RouterLink, LoaderDirective, FavoriteDirective],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
})
export class FilmDetailsComponent {
  //Film Details Page
  // Breadcrumbs: Home > Film Title
  // ("Home" is a clickable link, "Film Title" is the current page and is not clickable.)
  private readonly filmRepositoryService = inject(FilmRepositoryService);
  public readonly film = input.required<Film>();
  public readonly isLoading = this.filmRepositoryService.isLoading;
}
