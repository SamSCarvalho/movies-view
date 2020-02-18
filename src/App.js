import React from 'react';
import Routes from './routes';
import Header from './components/Header';

const App = () => (
  <div>
    <Header title='Movies' />
    <Routes />
  </div>
);

export default App;
