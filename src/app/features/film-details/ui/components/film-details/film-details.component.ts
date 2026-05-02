import { afterRenderEffect, Component, inject, input } from '@angular/core';
import type { Film } from '../../../../../shared/models/film.model';
import { NgOptimizedImage } from '@angular/common';
import { DurationPipe } from '../../../../../shared/pipes/duration/duration.pipe';
import { RouterLink } from '@angular/router';
import { FavoriteDirective } from '../../../../../shared/directives/favorite/favorite.directive';
import type { HttpResourceRef } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { LoaderDirective } from '../../../../../shared/directives/loader/loader.directive';
import { NotFoundComponent } from '../../../../not-found/ui/components/not-found/not-found.component';

@Component({
  selector: 'dashq-film-details',
  imports: [NgOptimizedImage, DurationPipe, RouterLink, FavoriteDirective, LoaderDirective, NotFoundComponent],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
})
export class FilmDetailsComponent {
  private titleService = inject(Title);
  public readonly film = input.required<HttpResourceRef<Film | null>>();

  constructor() {
    afterRenderEffect(() => {
      this.titleService.setTitle(this.film().value()?.title ?? '');
    });
  }
}
