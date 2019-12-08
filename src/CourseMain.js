import React, { Component } from 'react';
import SpecialProgramBar from './components/SpecialProgramBar.jsx';
import DemoCarousel from './components/carousel.jsx';

class CourseMain extends Component {
render() {
  return (
    <div className="CourseMain">
      <DemoCarousel/>
      <SpecialProgramBar></SpecialProgramBar>
    </div>
  );
}
}

export default CourseMain;
