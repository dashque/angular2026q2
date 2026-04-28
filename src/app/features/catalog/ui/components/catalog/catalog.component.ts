import { Component, inject } from '@angular/core';
import { FilmRepositoryService } from '../../../../../shared/services/film-repository/film-repository.service';
import { FilmCardComponent } from './film-card/film-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'dashq-catalog',
  imports: [FilmCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  private filmRepositoryService = inject(FilmRepositoryService);
  private router = inject(Router);
  public readonly filmList = this.filmRepositoryService.filmsList.value;

  public onCardClick(filmId: number) {
    void this.router.navigate(['details', filmId]);
  }
}
