import { Component } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FavoriteDirective } from './favorite.directive';
import { FilmRepositoryService } from '../../services/film-repository/services/film-repository.service';
import { filmFixture } from '../../services/film-repository/fixtures/film.fixture';
import { filmRepositoryServiceMock } from '../../services/film-repository/services/film-repository.service.mock';

@Component({
  imports: [FavoriteDirective],
  template: `<button [dashqFavorite]="film">Favorite</button>`,
})
class TestHostComponent {
  public readonly film = filmFixture;
}

describe('FavoriteDirective', () => {
  let directive: FavoriteDirective;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [{ provide: FilmRepositoryService, useValue: filmRepositoryServiceMock }],
    });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    directive = fixture.debugElement.query(By.directive(FavoriteDirective)).injector.get(FavoriteDirective);
  });
  // TODO add tests
  it('должен инициализироваться', () => {
    expect(directive).toBeTruthy();
  });
});
