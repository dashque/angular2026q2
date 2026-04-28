import { Component, inject } from '@angular/core';
import { FilmRepositoryService } from '../../../../../shared/services/film-repository/film-repository.service';

@Component({
  selector: 'dashq-catalog',
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  private filmRepositoryService = inject(FilmRepositoryService);
  public readonly filmList = this.filmRepositoryService.filmsList.value;
}
