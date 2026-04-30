import { filmFixture } from './film.fixture';
import type { Film } from '../../../models/film.model';
import { favoriteFilmFixture } from './favorite-film.fixture';

export const filmListFixture = [filmFixture, favoriteFilmFixture] as const satisfies Film[];
