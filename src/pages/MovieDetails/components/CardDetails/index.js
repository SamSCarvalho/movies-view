import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderCard from '../HeaderCard';
import InfoMovie from '../InfoMovie';

import { IMG_URL } from '../../../../constants/api';
import { getMovie } from '../../../../services/movieService';

import '../../style.css';

class CardDetails extends Component {
  static propTypes = {
    idMovie: PropTypes.string,
  };

  static defaultProps = {
    idMovie: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    }
  }

  componentDidMount = async () => {
    const { idMovie } = this.props;
    const movie = await getMovie(idMovie);
    this.setState({
      movie
    });
  }

  render() {
    const { movie } = this.state;
    if (!movie) return null;
    const path = (movie.poster_path) ? `${IMG_URL}${movie.poster_path}` : undefined;
    return(
      <div className="card-details">
        <HeaderCard
          title={movie.title}
          date={movie.release_date}
        />
        <div className='card-content'>
          <div className="card-details-div-img">
            <img src={path} alt={movie.title} />
          </div>
          <InfoMovie 
            overview={movie.overview}
            genres={movie.genres}
            rating={movie.vote_average}
            runtime={movie.runtime}
            revenue={movie.revenue}
            budget={movie.budget}
            status={movie.status}
            language={movie.original_language}
          />
        </div>
      </div>
    )
  }
}

export default CardDetails;