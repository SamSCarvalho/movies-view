import React from 'react';
import Routes from './routes';
import Header from './components/Header';

const App = () => (
  <div>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Abel" />
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"/>
    <Header title='Movies' />
    <Routes />
  </div>
);

export default App;
