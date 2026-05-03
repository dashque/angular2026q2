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

describe('ThemeTogglerDirective', () => {
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
    document.body.classList.remove('dark-theme');
  });

  it('должна инициализироваться', () => {
    expect(directive).toBeTruthy();
  });

  describe('Переключение темы', () => {
    it('должен вызывать метод переключения классов', () => {
      const toggleSpy = jest.spyOn(document.body.classList, 'toggle');

      toggleButton.click();
      fixture.detectChanges();

      expect(toggleSpy).toHaveBeenCalledTimes(1);
    });

    it('должен добавлять класс на body', () => {
      document.body.classList.remove('dark-theme');

      toggleButton.click();
      fixture.detectChanges();

      expect(document.body.classList.contains('dark-theme')).toBeTruthy();
    });

    it('должен убирать класс с body', () => {
      document.body.classList.add('dark-theme');

      toggleButton.click();
      fixture.detectChanges();

      expect(document.body.classList.contains('dark-theme')).toBeFalsy();
    });
  });
});
