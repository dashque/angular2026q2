import { Component } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoaderDirective } from './loader.directive';

@Component({
  imports: [LoaderDirective],
  template: `<div [dashqLoader]="isLoading"><span>content</span></div>`,
})
class TestHostComponent {
  public isLoading = false;
}

describe('LoaderDirective', () => {
  let directive: LoaderDirective;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostElement: HTMLDivElement;
  let contentElement: HTMLSpanElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
    });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    directive = fixture.debugElement.query(By.directive(LoaderDirective)).injector.get(LoaderDirective);
    hostElement = fixture.debugElement.query(By.css('div')).nativeElement as HTMLDivElement;
    contentElement = fixture.debugElement.query(By.css('span')).nativeElement as HTMLSpanElement;
  });

  it('должен инициализироваться', () => {
    expect(directive).toBeTruthy();
  });

  describe('Статус загрузки true', () => {
    describe('Есть дочерний контент', () => {
      it('должен сделать его невидимым', () => {
        fixture.componentInstance.isLoading = true;
        fixture.detectChanges();

        expect(contentElement.style.visibility).toBe('hidden');
      });
    });

    describe('Хост элемент не содержит лоадер', () => {
      it('должен добавить лоадер к хост элементу', () => {
        fixture.componentInstance.isLoading = true;
        fixture.detectChanges();

        expect(hostElement.querySelector('.loader-overlay')).toBeTruthy();
      });
    });
  });

  describe('Статус загрузки false', () => {
    describe('Хост элемент содержит лоадер', () => {
      it('должен удалить лоадер из хост элемента', () => {
        fixture.componentInstance.isLoading = true;
        fixture.detectChanges();
        fixture.componentInstance.isLoading = false;
        fixture.detectChanges();

        expect(hostElement.querySelector('.loader-overlay')).toBeFalsy();
      });
    });

    describe('Есть дочерний контент', () => {
      it('должен сделать его видимым', () => {
        fixture.componentInstance.isLoading = true;
        fixture.detectChanges();
        fixture.componentInstance.isLoading = false;
        fixture.detectChanges();

        expect(contentElement.style.visibility).toBe('visible');
      });
    });
  });
});
