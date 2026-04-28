import { Directive } from '@angular/core';

@Directive({
  selector: '[dashqAutofocus]',
})
export class AutofocusDirective {
  //Custom Directive
  // Create an attribute directive for autofocus:
  //
  // When the element appears in the DOM — automatically sets focus on it
  // The directive must be standalone
  // Must be applied to the search field on the home page
  constructor() {}
}
