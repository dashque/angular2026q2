import type { FilmRepositoryService } from './film-repository.service';
import { filmFixture } from '../fixtures/film.fixture';
import { filmListResourceReferenceMock } from '../../../mocks/http-resource/film-resource-reference.mock';

export const filmRepositoryServiceMock = {
  filmListResourceRef: filmListResourceReferenceMock,
  toggleFavorite: jest.fn(),
  getFilmDetails: jest.fn().mockReturnValue(filmFixture) as any,
} as const satisfies jest.Mocked<Partial<FilmRepositoryService>>;
