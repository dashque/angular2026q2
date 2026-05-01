import { afterNextRender, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import type { Breadcrumb } from './models/breadcrumb.model';

@Component({
  selector: 'dashq-breadcrumbs',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  //Breadcrumbs — show the user's current location in the application. For example: "Home", "Home > Film Title", "About".
  // Clickable breadcrumb items serve as navigation links.
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  public readonly breadcrumbs: Breadcrumb[] = [];

  constructor() {
    afterNextRender(() => {});
  }
}
