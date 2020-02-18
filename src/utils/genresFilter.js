const genreFilter = (genresMovie, allGenres) => {
  return allGenres.filter(genre => genresMovie.indexOf(genre.id) > 0);
}

export default genreFilter;