import React, { Component } from "react";
import Slider from "react-slick";
import './Slider.css';

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        // infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="main_header_slider_area">
          <Slider {...settings}>
            <div className="main_header_slider_cntnt">
              <div>
                <div>버튼영역1</div>
                <div>글영역1</div>
              </div>
              <img src="/images/main/main_header.png"/>
            </div>
            <div className="main_header_slider_cntnt">
              <div>
                <div>버튼영역2</div>
                <div>글영역2</div>
              </div>
              <img src="/images/main/main_header.png"/>
            </div>
            <div className="main_header_slider_cntnt">
              <div>
                <div>버튼영역3</div>
                <div>글영역3</div>
              </div>
              <img src="/images/main/main_header.png"/>
            </div>
          </Slider>
        </div>
      );
    }
  }