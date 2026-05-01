import { Component, inject } from '@angular/core';
import { FilmRepositoryService } from '../../../../../shared/services/film-repository/services/film-repository.service';
import { FilmCardComponent } from './film-card/film-card.component';
import { Router } from '@angular/router';
import { AutofocusDirective } from '../../directives/autofocus/autofocus.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderDirective } from '../../../../../shared/directives/loader/loader.directive';

@Component({
  selector: 'dashq-catalog',
  imports: [FilmCardComponent, AutofocusDirective, ReactiveFormsModule, LoaderDirective],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  // Breadcrumbs: Home
  private readonly filmRepositoryService = inject(FilmRepositoryService);
  private readonly router = inject(Router);
  public readonly isLoading = this.filmRepositoryService.isLoading;
  public readonly filmList = this.filmRepositoryService.filmList;
  public readonly searchControl = this.filmRepositoryService.searchForm.controls.searchField;

  public onCardClick(filmId: number) {
    void this.router.navigate(['details', filmId]);
  }
}
