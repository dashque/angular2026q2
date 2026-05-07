import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsService } from '../../services/breadcrumbs/services/breadcrumbs.service';

@Component({
  selector: 'dashq-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  public readonly breadcrumbs = inject(BreadcrumbsService).breadcrumbs;
}
