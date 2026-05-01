import { Directive, DOCUMENT, inject } from '@angular/core';

@Directive({
  selector: '[dashqThemeToggler]',
  host: {
    '(click)': 'toggleTheme()',
  },
})
export class ThemeTogglerDirective {
  private readonly body = inject(DOCUMENT).body;

  public toggleTheme() {
    this.body.classList.toggle('dark-theme');
  }
}
