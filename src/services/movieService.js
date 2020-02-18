import APIRequest from './client/movieApi';

export const listMovies = async () => {
  const movies = await APIRequest('/discover/movie/', {
    params: {
      sort_by: 'popularity.desc',
      page: 1,
      language: 'pt-Br'
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
      language: 'pt-Br'
    }
  })
  .then((response) => {
    return response.data
  });

  return movies;
}