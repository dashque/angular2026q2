import { AutofocusDirective } from './autofocus.directive';
import type { DebugElement } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<input type="text" /> <textarea dashqAutofocus></textarea>`,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestComponent {}

describe('AutofocusDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let input: DebugElement;
  let directive: AutofocusDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [AutofocusDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
  });

  it('должна инициализироваться', () => {
    fixture.detectChanges();
    input = fixture.debugElement.query(By.directive(AutofocusDirective));
    directive = input.injector.get(AutofocusDirective);

    expect(directive).toBeTruthy();
  });

  it('должна устанавливать фокус на хост элемент', () => {
    const focusSpy = jest.spyOn(HTMLInputElement.prototype, 'focus');

    fixture.detectChanges();

    expect(focusSpy).toHaveBeenCalledTimes(1);
  });

  describe.each([1])('Селектор по атрибуту', () => {
    it('должна инициализироваться на элементе с dashqAutofocus', () => {
      const focusSpy = jest.spyOn(HTMLTextAreaElement.prototype, 'focus');

      fixture.detectChanges();

      expect(directive).toBeTruthy();
    });

    it('должна устанавливать фокус на хост элемент', () => {
      const focusSpy = jest.spyOn(HTMLTextAreaElement.prototype, 'focus');

      fixture.detectChanges();

      expect(focusSpy).toHaveBeenCalledTimes(1);
    });
  });
});
