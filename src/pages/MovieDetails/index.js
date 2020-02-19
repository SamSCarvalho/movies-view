import React, { Component } from 'react';
import CardDetails from './components/CardDetails';
import PlayVideo from './components/PlayVideo';

import { getTrailerMovie } from '../../services/movieService';

import './style.css';

class Home extends Component {
  
  constructor() {
    super();
    this.state = {
      trailer: null,
    }
  }

  componentDidMount =  async () => {
    const { id: idMovie } = this.props.match.params
    const [trailer] = await getTrailerMovie(idMovie);
    this.setState({
      trailer
    })
  }

  render() {
    const { id: idMovie } = this.props.match.params;
    const { trailer } = this.state;
    return (
      <div className="div-card-details">
        <CardDetails idMovie={idMovie}/>
        {(trailer)
          ? ( <PlayVideo id={trailer.key} />)
          : null
        }
        
      </div>
    );
  }
}

export default Home;
