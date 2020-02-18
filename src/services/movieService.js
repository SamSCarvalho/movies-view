import APIRequest from './client/movieApi';

export const getMovies = async (page) => {
  const movies = await APIRequest('/discover/movie/', {
    params: {
      sort_by: 'popularity.desc',
      page,
      language: 'pt-Br',
    }
  })
  .then((response) => {
    return response.data
  });

  return movies;
}

export const getMovie = async (id) => {
  const movies = await APIRequest(`/movie/${id}`, {
    params: {
      sort_by: 'popularity.desc',
      page: 1,
      language: 'pt-Br',
    }
  })
  .then((response) => {
    return response.data
  });

  return movies;
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

export const searchMovies = async (page) => {
  const movies = await APIRequest('/search/movie', {
    params: {
      query: 'Tropa de Elite',
      page,
      language: 'pt-Br',
    }
  })
  .then((response) => {
    return response.data;
  })

  return movies;
}