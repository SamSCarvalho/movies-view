import React, { Component } from 'react';
import { IMG_URL } from '../../constants/api';

import CardMovie from './components/CardMovie';
import Pagination from './components/Pagination';
import SearchInput from '../../components/SearchInput';

import { getMovies } from '../../services/movieService';

import { genreFilterById } from '../../utils/genresFilter';
import genres from '../../utils/genres';

import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 1,
      totalPages: 1,
      filter: null,
    }
  }

  componentDidMount = async () => {
    const { page } = this.state;
    const movies = await getMovies(page);
    console.log(movies)
    this.setState({
      movies: movies.results,
      totalPages: movies.total_pages
    });
  }

  renderCardMovies = () => {
    const { movies } = this.state;
    const moviesCard = [];
    if (movies.length > 0) {
      movies.forEach(movie => {
        if (movie) {
          const path = (movie.poster_path) ? `${IMG_URL}${movie.poster_path}` : undefined;
          const genresToMovie = genreFilterById(movie.genre_ids, genres);
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
    const { filter } = this.state;
    const movies = await getMovies(page, filter);
    console.log(movies);
    this.setState({
      movies: movies.results
    })
  }

  searchMovie = async (value) => {
    const { page } = this.state;
    const movies = await getMovies(page, value);
    console.log(movies);
    this.setState({
      page: 1,
      filter: value,
      movies: movies.results,
      totalPages: movies.total_pages
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
        <SearchInput
          searchFunction={this.searchMovie}
        />
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
