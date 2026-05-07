import type { Film } from '../../../models/film.model';
import { filmFixture } from './film.fixture';

export const favoriteFilmFixture = {
  ...filmFixture,
  isFavorite: true,
  id: 2,
  title: 'Inception',
} as const satisfies Film;
