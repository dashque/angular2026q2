import { filmListFixture } from '../../services/film-repository/fixtures/film-list.fixture';
import type { HttpResourceRef } from '@angular/common/http';
import type { Film } from '../../models/film.model';

export const filmListResourceReferenceMock = {
  value: jest.fn().mockReturnValue([...filmListFixture]) as any,
  isLoading: jest.fn().mockReturnValue(false) as any,
  reload: jest.fn(),
} as const satisfies jest.Mocked<Partial<HttpResourceRef<Film[]>>>;
