import { Component } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FavoriteDirective } from './favorite.directive';
import { FilmRepositoryService } from '../../services/film-repository/services/film-repository.service';
import { filmFixture } from '../../services/film-repository/fixtures/film.fixture';
import { filmRepositoryServiceMock } from '../../services/film-repository/services/film-repository.service.mock';
import { favoriteFilmFixture } from '../../services/film-repository/fixtures/favorite-film.fixture';
import type { Film } from '../../models/film.model';

@Component({
  imports: [FavoriteDirective],
  template: `<button [dashqFavorite]="film">Favorite</button>`,
})
class TestHostComponent {
  public film: Film | null = filmFixture;
}

describe('FavoriteDirective', () => {
  let directive: FavoriteDirective;
  let fixture: ComponentFixture<TestHostComponent>;
  let favoriteButton: HTMLButtonElement;

  beforeEach(() => {
    filmRepositoryServiceMock.toggleFavorite.mockClear();
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [{ provide: FilmRepositoryService, useValue: filmRepositoryServiceMock }],
    });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    directive = fixture.debugElement.query(By.directive(FavoriteDirective)).injector.get(FavoriteDirective);
    favoriteButton = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
  });
  it('должен инициализироваться', () => {
    expect(directive).toBeTruthy();
  });

  describe('Переключение статуса избранного', () => {
    describe('Фильм передан', () => {
      it('должен вызвать соответствующий метод сервиса', () => {
        fixture.detectChanges();

        favoriteButton.click();

        expect(filmRepositoryServiceMock.toggleFavorite).toHaveBeenNthCalledWith(1, filmFixture.id);
      });
    });

    describe('Фильм не передан', () => {
      it('не должен вызвать метод сервиса', () => {
        fixture.componentInstance.film = null;
        fixture.detectChanges();

        favoriteButton.click();

        expect(filmRepositoryServiceMock.toggleFavorite).not.toHaveBeenCalled();
      });
    });
  });

  describe('Хост элемент', () => {
    describe('Избранный фильм', () => {
      beforeEach(() => {
        fixture.componentInstance.film = favoriteFilmFixture;
        fixture.detectChanges();
      });

      it('должен добавлять класс favorite', () => {
        expect(favoriteButton.classList.contains('favorite')).toBeTruthy();
      });

      it('должен добавлять соответствующую иконку для избранного фильма', () => {
        expect(favoriteButton.getAttribute('data-favorite-icon')).toBe('♥');
      });
    });

    describe('Не избранный фильм', () => {
      beforeEach(() => {
        fixture.componentInstance.film = filmFixture;
        fixture.detectChanges();
      });

      it('должен добавлять класс favorite', () => {
        expect(favoriteButton.classList.contains('favorite')).toBeFalsy();
      });

      it('должен добавлять соответствующую иконку для избранного фильма', () => {
        expect(favoriteButton.getAttribute('data-favorite-icon')).toBe('♡');
      });
    });
  });
});
