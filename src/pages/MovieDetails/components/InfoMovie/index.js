import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TagGenre from '../../../../components/TagGenre';
import RatingScore from '../RatingScore';

import {
  INFO,
  SINOPSE,
  SITUACAO,
  IDIOMA,
  DURACAO,
  ORCAMENTO,
  RECEITA,
  LUCRO
} from '../../../../constants/infoMovie';
import { minuteToHour } from '../../../../utils/timeConvert';
import convertMoney from '../../../../utils/convertMoney';

import '../../style.css'

class InfoMovie extends Component {
  static propTypes = {
    overview: PropTypes.string,
    rating: PropTypes.number,
    genres: PropTypes.array,
    runtime: PropTypes.number,
  };

  static defaultProps = {
    overview: '',
    rating: 0,
    runtime: 0,
    genres: [],
  };

  renderInfo = (title, value) => (
    <div className="esp-movie">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  )

  renderTags = () => {
    const { genres } = this.props;
    const tagsGenres = [];
    if (genres.length > 0) {
      genres.forEach(genre => {
        tagsGenres.push(
          <TagGenre
            key={genre.id}
            describe={genre.name}
          />
        )
      });
    }
    
    return tagsGenres;
  }

  render() {
    const {
      overview,
      rating,
      runtime,
      revenue,
      budget,
    } = this.props;
    const duration = minuteToHour(runtime);

    return(
      <div className="info-movie-details">
        <div className="info-movie-row">
          <h2>{SINOPSE}</h2>
          <p>{overview}</p>
        </div>
        <div className="info-movie-row">
          <h2>{INFO}</h2>
          <div className="info-movie-esp">
            {this.renderInfo(SITUACAO, 'Lançado')}
            {this.renderInfo(IDIOMA, 'Inglês')}
            {this.renderInfo(DURACAO, duration)}
            {this.renderInfo(ORCAMENTO, convertMoney(budget))}
            {this.renderInfo(RECEITA, convertMoney(revenue))}
            {this.renderInfo(LUCRO, convertMoney(revenue-budget))}
          </div>
        </div>
        <div className="info-movie-tags">
          {this.renderTags()}
        </div>
        <div className="info-movie-score">
          <RatingScore rating={rating} />
        </div>
      </div>
    )
  }
}

export default InfoMovie;