import type { Film } from '../../models/film.model';

export const filmFixture = {
  id: 1,
  title: 'Interstellar',
  year: 2014,
  genre: 'Sci-Fi',
  rating: 8.6,
  duration: 169,
  description:
    'When drought, dust storms, and the extinction of crops lead humanity to a food crisis, a team of explorers and scientists travels through a wormhole in search of a new home for mankind.',
  posterUrl: 'https://placehold.co/300x450?text=Interstellar',
  isFavorite: false,
} as const satisfies Film;
