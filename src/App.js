import React from 'react';
import HomePage from './components/home.jsx';
import SpecialProgramBar from './components/SpecialProgramBar.jsx';
import DemoCarousel from './components/carousel.jsx';

function App() {
  return (
    <div className="App">
      <HomePage />
      <DemoCarousel/>
      <SpecialProgramBar></SpecialProgramBar>
    </div>
  );
}

export default App;
