import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeTogglerDirective } from '../../directives/theme-toggler/theme-toggler.directive';

@Component({
  selector: 'dashq-header',
  imports: [RouterLink, ThemeTogglerDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
