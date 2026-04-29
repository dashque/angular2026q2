import type { ActivatedRouteSnapshot } from '@angular/router';

export const activatedRouteSnapshotMock = {
  paramMap: {
    get: jest.fn(() => {
      return null;
    }),
  },
} as jest.Mocked<ActivatedRouteSnapshot & { paramMap: { get: jest.Mock } }>;
