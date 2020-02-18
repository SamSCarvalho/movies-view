import React, { Component } from 'react';
import { listMovies } from '../../services/movieService';

class Home extends Component {

  componentDidMount = async () => {
    const movies = await listMovies();
    console.log(movies);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
