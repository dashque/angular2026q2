import { type ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { activatedRouteSnapshotMock } from './activated-route-snapshot.mock';

export const activatedRouteMock = {
  data: of({}),
  paramMap: of({
    get: jest.fn(() => {
      return null;
    }),
    getAll: jest.fn(() => {
      return [];
    }),
    has: jest.fn(() => {
      return false;
    }),
    keys: [],
  }),
  snapshot: activatedRouteSnapshotMock,
} as const satisfies jest.Mocked<Partial<ActivatedRoute>>;
