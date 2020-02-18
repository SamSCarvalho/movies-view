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
      totalPages: 1,
    }
  }

  componentDidMount = async () => {
    const { page } = this.state;
    const movies = await searchMovies(page);
    console.log(movies)
    const genres = await getGenres();
    this.setState({
      movies: movies.results,
      genres,
      totalPages: movies.total_pages
    });
  }

  renderCardMovies = () => {
    const { genres, movies } = this.state;
    const moviesCard = [];
    if (movies.length > 0) {
      movies.forEach(movie => {
        if (movie) {
          const path = (movie.poster_path) ? `${IMG_URL}${movie.poster_path}` : undefined;
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

  getMoreMovies = async (page) => {
    const movies = await searchMovies(page);
    console.log(movies);
    this.setState({
      movies: movies.results
    })
  }

  changePage = async (page) => {
    this.setState({
      page
    });
    await this.getMoreMovies(page);
    window.scrollTo(0, 0)
  }

  render() {
    const { page, totalPages } = this.state;
    return (
      <div>
        <div className='list-movies-div'>
          {this.renderCardMovies()}
        </div>
        <div className="pagination-div">
          <Pagination
            changePage={this.changePage}
            value={page}
            numberPages={totalPages}
          />
        </div>
      </div>
    );
  }
}

export default Home;
