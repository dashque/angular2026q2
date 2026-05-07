import { computed, inject, Injectable } from '@angular/core';
import type { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import type { Breadcrumb } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  private readonly router = inject(Router);
  public readonly breadcrumbs = computed(() => {
    this.router.currentNavigation();

    return this.getBreadcrumbs();
  });

  private getBreadcrumbs() {
    const breadcrumbList: Breadcrumb[] = [];
    let currentRoute: ActivatedRouteSnapshot | null = this.router.routerState.snapshot.root;
    let currentUrl = '';

    while (currentRoute) {
      const routePath = currentRoute.url
        .map((segment) => {
          return segment.path;
        })
        .join('/');

      currentUrl = routePath ? `${currentUrl}/${routePath}` : currentUrl;

      const label = this.resolveBreadcrumbLabel(currentRoute);

      if (label) {
        breadcrumbList.push({
          label,
          url: currentUrl || '/',
        });
      }

      currentRoute = currentRoute.firstChild;
    }

    return breadcrumbList;
  }

  private resolveBreadcrumbLabel(routeSnapshot: ActivatedRouteSnapshot) {
    const routeData = routeSnapshot.routeConfig?.data as { breadcrumb?: unknown } | undefined;
    const breadcrumbData = routeData?.breadcrumb;
    let label: string | null = null;

    if (typeof breadcrumbData === 'string') {
      label = breadcrumbData;
    }

    if (this.isBreadcrumbFactory(breadcrumbData)) {
      const resolvedLabel = breadcrumbData(routeSnapshot);

      label = typeof resolvedLabel === 'string' ? resolvedLabel : null;
    }

    if (!label) {
      return null;
    }

    const normalizedLabel = label.trim();

    if (!normalizedLabel) {
      return null;
    }

    return normalizedLabel;
  }

  private isBreadcrumbFactory(value: unknown): value is (snapshot: ActivatedRouteSnapshot) => unknown {
    return typeof value === 'function';
  }
}
