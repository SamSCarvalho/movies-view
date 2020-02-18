import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import RatingScore from '../RatingScore';
import TagGenre from '../TagGenre';


import '../../style.css';
import imageNotFound from '../../../../res/images/notFoundImage.jpg';

class CardMovie extends Component {
  static propTypes = {
    movieId: PropTypes.number,
    title: PropTypes.string,
    posterPath: PropTypes.string,
    overview: PropTypes.string,
    date: PropTypes.string,
    voteAverage: PropTypes.number,
  };

  static defaultProps = {
    movieId: 0,
    title: 'Sem título',
    overview: 'Filme sem descrição',
    posterPath: imageNotFound,
    date: '',
    voteAverage: 0,
  };

  renderTags = () => {
    const { genres } = this.props;
    const tagsGenres = [];
    genres.forEach(genre => {
      tagsGenres.push(
        <TagGenre
          key={genre.id}
          describe={genre.name}
        />
      )
    });
    
    return tagsGenres;
  }

  render() {
    const {
      movieId,
      title,
      posterPath,
      overview,
      date,
      voteAverage,
    } = this.props;

    const dateRelease = moment(date).format("DD/MM/YYYY");

    return (
      <div className="card-movie" onClick={()=> {console.log(movieId)}}>
        <div className="card-img">
          <img src={posterPath} alt={title} />
        </div>
        <div className="card-movie-info">
          <header className='card-movie-header'>
            <h1>
              {title}
            </h1>
          </header>
          <RatingScore rating={voteAverage} />
          <time dateTime={date} className="card-movie-date">{dateRelease}</time>
          <div className="card-movie-overview">
            <p>
              {overview}
            </p>
          </div>
          <div className="card-tags">
            {this.renderTags()}
          </div>
        </div>
      </div>
    );
  }
}

export default CardMovie;
