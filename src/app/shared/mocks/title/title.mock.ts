import type { Title } from '@angular/platform-browser';

export const titleMock = {
  setTitle: jest.fn(),
} as const satisfies jest.Mocked<Partial<Title>>;
