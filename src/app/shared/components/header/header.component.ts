import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dashq-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
