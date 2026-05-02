import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { filmFixture } from '../../../../../shared/services/film-repository/fixtures/film.fixture';

import { FilmDetailsComponent } from './film-details.component';
import { titleMock } from '../../../../../shared/mocks/title/title.mock';
import { filmResourceReferenceMock } from '../../../../../shared/mocks/http-resource/film-resource-reference.mock';

describe('FilmDetailsComponent', () => {
  let component: FilmDetailsComponent;
  let fixture: ComponentFixture<FilmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmDetailsComponent],
      providers: [{ provide: Title, useValue: titleMock }, provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmDetailsComponent);
    component = fixture.componentInstance;
    titleMock.setTitle.mockClear();
    fixture.componentRef.setInput('film', filmResourceReferenceMock);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  describe('Инициализация компонента', () => {
    it('должен инициализироваться', () => {
      expect(component).toBeTruthy();
    });

    it('заголовок должен быть установлен', () => {
      expect(titleMock.setTitle).toHaveBeenNthCalledWith(1, filmFixture.title);
    });
  });
});
