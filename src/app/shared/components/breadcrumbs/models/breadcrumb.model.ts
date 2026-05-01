import type { ActivatedRouteSnapshot } from '@angular/router';

export type BreadcrumbData = string | ((snapshot: ActivatedRouteSnapshot) => string);

export interface Breadcrumb {
  label: string;
  url: string;
}
