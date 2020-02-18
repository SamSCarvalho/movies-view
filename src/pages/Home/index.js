import React, { Component } from 'react';
import { IMG_URL } from '../../constants/api';
import { NUMBER_RESULTS } from '../../constants/pagination';

import CardMovie from './components/CardMovie';
import Pagination from './components/Pagination';

import { getGenres, searchMovies } from '../../services/movieService';
import genresFilter from '../../utils/genresFilter';

import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      page: 1,
      pageApi: 1,
    }
  }

  componentDidMount = async () => {
    const movies = await searchMovies();
    console.log(movies)
    const genres = await getGenres();
    this.setState({
      movies: movies.results,
      genres
    });
  }


  movieListPage = () => {
    const { movies, page } = this.state;
    let startIndex = 0;
    let endIndex = NUMBER_RESULTS;
    if (page > 1) {
      startIndex = NUMBER_RESULTS * (page - 1);
      endIndex = NUMBER_RESULTS * page;
    }
    const moviesList = movies.slice(startIndex, endIndex);
    return moviesList;
  }

  renderCardMovies = () => {
    const { genres } = this.state;
    const moviesCard = [];
    const movies = this.movieListPage();
    if (movies.length > 0) {
      movies.forEach(movie => {
        if (movie) {
          const path = `${IMG_URL}${movie.poster_path}`;
          const genresToMovie = genresFilter(movie.genre_ids, genres);
          moviesCard.push(
            <CardMovie
              key={movie.id}
              movieId={movie.id}
              date={(movie.release_date !== '') ? movie.release_date : undefined}
              title={(movie.title !== '') ? movie.title : undefined }
              posterPath={(path !== '') ? path : undefined}
              voteAverage={(movie.vote_average !== '') ? movie.vote_average : undefined}
              overview={(movie.overview !== '') ? movie.overview : undefined}
              genres={genresToMovie}
            />
          )
        }
      });
    }
    return moviesCard;
  }

  changePage = async (page) => {
    this.setState({
      page
    });
    window.scrollTo(0, 0)
  }

  render() {
    const { page } = this.state;
    return (
      <div>
        <div className='list-movies-div'>
          {this.renderCardMovies()}
        </div>
        <div className="pagination-div">
          <Pagination
            changePage={this.changePage}
            value={page}
          />
        </div>
      </div>
    );
  }
}

export default Home;
