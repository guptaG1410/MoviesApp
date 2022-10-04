import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Banner/>
      <Movies/>
    </React.Fragment>
  );
}

export default App;
