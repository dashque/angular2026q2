import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashq-breadcrumbs',
  imports: [],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  //Breadcrumbs — show the user's current location in the application. For example: "Home", "Home > Film Title", "About".
  // Clickable breadcrumb items serve as navigation links.

  private readonly router = inject(Router);
}
