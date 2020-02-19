import APIRequest from './client/movieApi';

export const getMovie = async (id) => {
  const movies = await APIRequest(`/movie/${id}`, {
    params: {
      language: 'pt-Br',
    }
  })
  .then((response) => {
    return response.data
  });

  return movies;
}

export const getTrailerMovie = async (id) => {
  const trailer = await APIRequest(`/movie/${id}/videos`,)
  .then((response) => {
    return response.data.results
  })
  
  return trailer;
}

export const getGenres = async () => {
  const genres = await APIRequest('/genre/movie/list', {
    params: {
      language: 'pt-Br',
    }
  })
  .then((response) => {
    return response.data.genres;
  })

  return genres;
}

const searchMovies = async (page, value) => {
  const movies = await APIRequest('/search/movie', {
    params: {
      query: value,
      page,
      language: 'pt-Br',
      year: (Number(value)) ? Number(value) : undefined,
      include_adult: false,
    }
  })
  .then((response) => {
    return response.data;
  })

  return movies;
}

const discoverMovies = async (page, value) => {
  const movies = await APIRequest('/discover/movie/', {
    params: {
      sort_by: 'popularity.desc',
      page,
      language: 'pt-Br',
      with_genres: value,
      include_adult: false,
      include_video: true,
    }
  })
  .then((response) => {
    return response.data
  });

  return movies;
}

export const getMovies = async (page, value) => {
  let result = null;
  if (value) {
    result = await searchMovies(page, value);
  } else {
    result = await discoverMovies(page);
  }
  return result;
}