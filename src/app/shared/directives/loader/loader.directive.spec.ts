import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoaderDirective } from './loader.directive';

@Component({
  imports: [LoaderDirective],
  template: `<div [dashqLoader]="false"><span>content</span></div>`,
})
class TestHostComponent {}

describe('LoaderDirective', () => {
  it('должен инициализироваться', () => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
    });
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();
    const directiveInstance = fixture.debugElement.query(By.directive(LoaderDirective)).injector.get(LoaderDirective);

    expect(directiveInstance).toBeTruthy();
  });
});
