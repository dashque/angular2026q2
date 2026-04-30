import { afterRenderEffect, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: 'input[type="text"], [dashqAutofocus]',
})
export class AutofocusDirective {
  private hostElement = inject(ElementRef);

  constructor() {
    afterRenderEffect(() => {
      this.hostElement.nativeElement.focus();
    });
  }
}
