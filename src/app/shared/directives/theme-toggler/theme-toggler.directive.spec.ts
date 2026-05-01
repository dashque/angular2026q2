import { ThemeTogglerDirective } from './theme-toggler.directive';
import { Component } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  imports: [ThemeTogglerDirective],
  template: `<button dashqThemeToggler>Theme</button>`,
})
class TestHostComponent {}

describe.each([0])('ThemeTogglerDirective', () => {
  let directive: ThemeTogglerDirective;
  let fixture: ComponentFixture<TestHostComponent>;
  let toggleButton: HTMLButtonElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
    });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    directive = fixture.debugElement.query(By.directive(ThemeTogglerDirective)).injector.get(ThemeTogglerDirective);
    toggleButton = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
  });

  it('должна инициализироваться', () => {
    expect(directive).toBeTruthy();
  });

  it('должен добавлять класс на body', () => {
    toggleButton.click();
    fixture.detectChanges();

    expect(document.body.classList.contains('dark-theme')).toBeTruthy();
  });

  it('должен убирать класс с body', () => {
    toggleButton.click();
    fixture.detectChanges();

    expect(document.body.classList.contains('dark-theme')).toBeFalsy();
  });
});
