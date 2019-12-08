import React from 'react';
import SpecialProgramBar from './components/SpecialProgramBar.jsx';
import DemoCarousel from './components/carousel.jsx';

function CourseMain() {
  return (
    <div className="CourseMain">
      <DemoCarousel/>
      <SpecialProgramBar></SpecialProgramBar>
    </div>
  );
}

export default CourseMain;
