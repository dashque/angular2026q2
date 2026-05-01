import { Component } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoaderDirective } from './loader.directive';

@Component({
  imports: [LoaderDirective],
  template: `<div [dashqLoader]="false"><span>content</span></div>`,
})
class TestHostComponent {}

describe('LoaderDirective', () => {
  let directive: LoaderDirective;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
    });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    directive = fixture.debugElement.query(By.directive(LoaderDirective)).injector.get(LoaderDirective);
  });
  //TODO add tests
  it('должен инициализироваться', () => {
    expect(directive).toBeTruthy();
  });
});
