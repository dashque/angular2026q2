import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FavoriteDirective } from './favorite.directive';
import { FilmRepositoryService } from '../../services/film-repository/services/film-repository.service';
import { filmFixture } from '../../services/film-repository/fixtures/film.fixture';

@Component({
  imports: [FavoriteDirective],
  template: `<button [dashqFavorite]="film">Favorite</button>`,
})
class TestHostComponent {
  public readonly film = filmFixture;
}

describe('FavoriteDirective', () => {
  it('должен инициализироваться', () => {
    const toggleFavoriteSpy = jest.fn();

    TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [{ provide: FilmRepositoryService, useValue: { toggleFavorite: toggleFavoriteSpy } }],
    });
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();
    const directiveInstance = fixture.debugElement
      .query(By.directive(FavoriteDirective))
      .injector.get(FavoriteDirective);

    expect(directiveInstance).toBeTruthy();
  });
});
