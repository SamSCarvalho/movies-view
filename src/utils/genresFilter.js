import slugify from './slugify';

export const genreFilterById = (genresMovie, allGenres) => {
  return allGenres.filter(genre => genresMovie.indexOf(genre.id) > 0);
}

export const genreFilterByDescri = (descri, allGenres) => {
  return allGenres.filter(genre => slugify(genre.name).match(slugify(descri)));
}
