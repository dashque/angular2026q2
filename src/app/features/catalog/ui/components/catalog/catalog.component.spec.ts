import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { CatalogComponent } from './catalog.component';
import { Router } from '@angular/router';
import { routerMock } from '../../../../../shared/mocks/router/router.mock';
import { filmFixture } from '../../../../../shared/services/film-repository/fixtures/film.fixture';
import { FilmListFacade } from '../../../../../shared/facades/film-list/film-list.facade';
import { filmListFacadeMock } from '../../../../../shared/facades/film-list/film-list.facade.mock';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: FilmListFacade, useValue: filmListFacadeMock },
      ],
      imports: [CatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('должен инициализироваться', () => {
    expect(component).toBeTruthy();
  });

  describe('Клик по карточке фильма', () => {
    it('должен редиректить на страницу деталей', () => {
      component.onCardClick(filmFixture.id);

      expect(routerMock.navigate).toHaveBeenNthCalledWith(1, ['details', 1]);
    });
  });
});
