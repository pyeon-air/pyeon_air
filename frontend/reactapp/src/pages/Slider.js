import React, { Component } from "react";
import Slider from "react-slick";
import './Slider.css';

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings}>
            <div className="main_header_wrap">
              <h3>1</h3>
            </div>
            <div className="main_header_wrap">
              <h3>2</h3>
            </div>
            <div className="main_header_wrap">
              <h3>3</h3>
            </div>
            <div className="main_header_wrap">
              <h3>4</h3>
            </div>
            <div className="main_header_wrap">
              <h3>5</h3>
            </div>
            <div className="main_header_wrap">
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }