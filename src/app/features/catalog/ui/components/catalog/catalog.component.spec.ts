import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { CatalogComponent } from './catalog.component';
import { Router } from '@angular/router';
import { routerMock } from '../../../../../shared/mocks/router/router.mock';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: routerMock }],
      imports: [CatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('должен инициализироваться', () => {
    expect(component).toBeTruthy();
  });

  describe('Клик по карточке фильма', () => {
    it('должен редиректить на страницу деталей', () => {
      component.onCardClick(1);

      expect(routerMock.navigate).toHaveBeenNthCalledWith(1, ['details', 1]);
    });
  });
});
