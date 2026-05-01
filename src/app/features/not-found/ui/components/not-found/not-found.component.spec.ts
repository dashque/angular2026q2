import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';
import { ActivatedRoute } from '@angular/router';
import { activatedRouteMock } from '../../../../../shared/mocks/activated-route/activated-route.mock';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('должен инициализироваться', () => {
    expect(component).toBeTruthy();
  });
});
