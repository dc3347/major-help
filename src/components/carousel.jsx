import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Table from './table.jsx';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    {/* <img src="https://cdn.dribbble.com/users/2440205/screenshots/6206157/concept___5_4x.png" width = "1px"/> */}
                    <Table />
                </div>
                <div>
                    <img src="https://cdn.dribbble.com/users/2440205/screenshots/6206157/concept___5_4x.png" width = "1px"/>
                    <Table />
                </div>
                <div>
                    <img src="https://cdn.dribbble.com/users/2440205/screenshots/6206157/concept___5_4x.png" width = "1px"/>
                    <Table />
                </div>
            </Carousel>
        );
    }
}
 
export default DemoCarousel;