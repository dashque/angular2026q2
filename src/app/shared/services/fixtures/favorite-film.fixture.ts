import type { Film } from '../../models/film.model';
import { filmFixture } from './film.fixture';

export const favoriteFilmFixture = { ...filmFixture, isFavorite: true } as const satisfies Film;
