import { Component, inject } from '@angular/core';
import { FilmRepositoryService } from '../../../../../shared/services/film-repository/services/film-repository.service';
import { FilmCardComponent } from './film-card/film-card.component';
import { Router } from '@angular/router';
import { AutofocusDirective } from '../../directives/autofocus/autofocus.directive';
import { SearchFormService } from '../../../../../shared/services/search-form/search-form.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'dashq-catalog',
  imports: [FilmCardComponent, AutofocusDirective, ReactiveFormsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  //Home Page (Catalog)
  // If no films match the query — a "Nothing found" message is displayed.
  // Each card has an "Add to favorites" button. Clicking it toggles the film's favorite status.
  // Clicking on a card (not the favorite button) navigates the user to that film's details page.
  // Breadcrumbs: Home
  private filmRepositoryService = inject(FilmRepositoryService);
  private router = inject(Router);
  public readonly filmList = this.filmRepositoryService.filmList;
  public readonly searchField = inject(SearchFormService).searchForm.controls.searchField;

  public onCardClick(filmId: number) {
    void this.router.navigate(['details', filmId]);
  }
}
