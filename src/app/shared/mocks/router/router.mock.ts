import type { Router } from '@angular/router';
import { of } from 'rxjs';

export const routerMock = {
  navigate: jest.fn().mockReturnValue(Promise.resolve(true)),
  navigateByUrl: jest.fn().mockReturnValue(Promise.resolve(true)),
  events: of(),
  url: '',
  createUrlTree: jest.fn(),
  serializeUrl: jest.fn().mockReturnValue(''),
} as const satisfies jest.Mocked<Partial<Router>>;
