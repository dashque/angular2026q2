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
  // The user opens the application and lands on the home page.
  //
  // All film cards from the mock data are displayed on screen.
  // Each card shows: poster, title, year, genre, rating.
  // Above the card list there is a search field. When the page opens, focus is automatically set on it (via a custom autofocus directive).
  // As the user types in the search field, the film list is automatically filtered by title — only films whose title contains the entered text remain.
  // If no films match the query — a "Nothing found" message is displayed.
  // Each card has an "Add to favorites" button. Clicking it toggles the film's favorite status.
  // Clicking on a card (not the favorite button) navigates the user to that film's details page.
  // Breadcrumbs: Home

  // Signals
  // All reactive data in the application is stored and processed via Angular Signals:
  // Search string — signal()
  // Filtered list — computed()
  // Component interaction — input() / output()
  private filmRepositoryService = inject(FilmRepositoryService);
  private router = inject(Router);
  public readonly filmList = this.filmRepositoryService.filmList;
  public readonly searchForm = inject(SearchFormService).searchForm;

  public onCardClick(filmId: number) {
    void this.router.navigate(['details', filmId]);
  }
}
