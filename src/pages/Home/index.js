import React, { Component } from 'react';
import { IMG_URL } from '../../constants/api';

import CardMovie from './components/CardMovie';
import Pagination from './components/Pagination';
import SearchInput from '../../components/SearchInput';

import { getMovies } from '../../services/movieService';

import { genreFilterById } from '../../utils/genresFilter';
import genres from '../../utils/genres';
import upArrow from '../../res/images/up-arrow.png'
import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 1,
      totalPages: 1,
      filter: null,
      buttonTop: false,
      ready: false,
    }
  }

  componentDidMount = async () => {
    const { page } = this.state;
    const movies = await getMovies(page);
    this.setState({
      movies: movies.results,
      totalPages: movies.total_pages,
      ready: true,
    });
    window.addEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height

    let buttonTop = false;

    if (scrolled > 0.025) {
      buttonTop = true;
    }

    this.setState({
      buttonTop
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
    } else {
      return (
        <div className="not-found-movie">
          <h1>
            Nenhum filme encontrado
          </h1>
        </div>
      )
    }
    return moviesCard;
  }

  getMoreMovies = async (page) => {
    const { filter } = this.state;
    const movies = await getMovies(page, filter);
    this.setState({
      movies: movies.results
    })
  }

  searchMovie = async (value) => {
    const { page } = this.state;
    const movies = await getMovies(page, value);
    this.setState({
      page: 1,
      filter: value,
      movies: movies.results,
      totalPages: movies.total_pages
    })
  }

  changePage = async (page) => {
    await this.getMoreMovies(page);
    this.setState({
      page
    });
    window.scrollTo(0, 0)
  }

  render() {
    const { page, totalPages, buttonTop, ready } = this.state;
    return (
      <div>
        <SearchInput
          searchFunction={this.searchMovie}
        />
        {(ready)
          ? (
            <div>
              <div className="list-movies-div">
                {this.renderCardMovies()}
              </div>
              <div className="pagination-div">
                <Pagination
                  changePage={this.changePage}
                  value={page}
                  numberPages={totalPages}
                />
                {(buttonTop)
                  ? (
                    <button
                      className="float"
                      onClick={() => { window.scrollTo(0, 0) }}
                      title="Voltar ao topo"
                    >
                      <img src={upArrow} alt="" />
                    </button>
                  ) : null
                }
              </div>
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default Home;
