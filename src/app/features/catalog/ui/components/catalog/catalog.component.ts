import { Component, inject } from '@angular/core';
import { FilmCardComponent } from './film-card/film-card.component';
import { Router } from '@angular/router';
import { AutofocusDirective } from '../../directives/autofocus/autofocus.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderDirective } from '../../../../../shared/directives/loader/loader.directive';
import { FilmListFacade } from '../../../../../shared/facades/film-list/film-list.facade';

@Component({
  selector: 'dashq-catalog',
  imports: [FilmCardComponent, AutofocusDirective, ReactiveFormsModule, LoaderDirective],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  private readonly filmListFacade = inject(FilmListFacade);
  private readonly router = inject(Router);
  public readonly isLoading = this.filmListFacade.isLoading;
  public readonly filmList = this.filmListFacade.filmList;
  public readonly searchControl = this.filmListFacade.searchForm.searchField;

  public onCardClick(filmId: number) {
    void this.router.navigate(['details', filmId]);
  }
}
