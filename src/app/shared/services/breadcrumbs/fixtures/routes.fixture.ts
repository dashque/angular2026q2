import type { Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route.component.fixture';

export const routesFixture = [
  {
    path: '',
    component: EmptyRouteComponent,
    children: [
      {
        path: '',
        data: { breadcrumb: 'Catalog' },
        component: EmptyRouteComponent,
        children: [
          {
            path: 'about',
            data: { breadcrumb: 'About app' },
            component: EmptyRouteComponent,
          },
          {
            path: 'dynamic',
            data: {
              breadcrumb: (): string => {
                return 'Dynamic';
              },
            },
            component: EmptyRouteComponent,
          },
          {
            path: 'empty-label',
            data: { breadcrumb: '   ' },
            component: EmptyRouteComponent,
          },
        ],
      },
    ],
  },
] as const satisfies Routes;
