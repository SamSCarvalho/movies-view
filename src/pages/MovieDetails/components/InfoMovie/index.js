import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TagGenre from '../../../../components/TagGenre';
import RatingScore from '../RatingScore';

import {
  INFO,
  SINOPSE,
  SITUATION,
  LANGUAGE,
  DURATION,
  BUDGET,
  REVENUE,
  PROFIT,
  NOT_OVERVIEW
} from '../../../../constants/infoMovie';
import {
  NOT_DEFINED,
} from '../../../../constants/system';
import { minuteToHour } from '../../../../utils/timeConvert';
import convertMoney from '../../../../utils/convertMoney';
import languageISO from '../../../../utils/language';
import getStatusMovie from '../../../../utils/getStatusMovie';

import '../../style.css'

class InfoMovie extends Component {
  static propTypes = {
    overview: PropTypes.string,
    rating: PropTypes.number,
    genres: PropTypes.array,
    runtime: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    language: PropTypes.string,
    status: PropTypes.string,
  };

  static defaultProps = {
    overview: NOT_DEFINED,
    rating: 0,
    runtime: 0,
    genres: [],
    budget: 0,
    revenue: 0,
    language: NOT_DEFINED,
    status: NOT_DEFINED,
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
      language,
      status,
    } = this.props;
    console.log(overview);
    let duration;
    if (runtime) {
      duration = minuteToHour(runtime);
    } else {
      duration = NOT_DEFINED;
    }
    const statusMovie = getStatusMovie(status);

    return(
      <div className="info-movie-details">
        <div className="info-movie-row">
          <h2>{SINOPSE}</h2>
          <p>{(overview) ? overview : NOT_OVERVIEW}</p>
        </div>
        <div className="info-movie-row">
          <h2>{INFO}</h2>
          <div className="info-movie-esp">
            {this.renderInfo(SITUATION, statusMovie)}
            {this.renderInfo(LANGUAGE, languageISO["pt-BR"].languages[language])}
            {this.renderInfo(DURATION, duration)}
            {this.renderInfo(BUDGET, convertMoney(budget))}
            {this.renderInfo(REVENUE, convertMoney(revenue))}
            {this.renderInfo(PROFIT, convertMoney(revenue-budget))}
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