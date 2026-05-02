import type { HttpResourceRef } from '@angular/common/http';

import type { Film } from '../../models/film.model';
import { resourceValueMock } from './resource-value.mock';
import { filmListFixture } from '../../services/film-repository/fixtures/film-list.fixture';

export const filmListResourceReferenceMock = {
  value: resourceValueMock.mockReturnValue(filmListFixture),
  isLoading: jest.fn((): boolean => {
    return false;
  }),
  hasValue: jest.fn((): boolean => {
    return true;
  }),
  error: jest.fn((): undefined => {
    return undefined;
  }),
  reload: jest.fn(),
} as unknown as HttpResourceRef<Film[]>;
