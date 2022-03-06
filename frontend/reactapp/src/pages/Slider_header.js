import React, { Component }from "react";
import Slider from "react-slick";
import './Slider.css';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        // ...style, 
        // display: "block", 
        // background: "green",
        top:"250px",
        left:"8px",
        zIndex: "1",
        width: "50px",
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        // ...style, 
        // display: "block", 
        // background: "red",
        top:"350px",
        left:"8px",
        zIndex: "1",
        width: "50px",
      }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {

  state = {
    isPause : false
  }

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    this.slider.slickPlay();
    if( this.state.isPause == false ) this.setState({ isPause: true });
    else this.setState({ isPause: false });
  }
  pause() {
    this.slider.slickPause();
    if( this.state.isPause == false ) this.setState({ isPause: true });
    else this.setState({ isPause: false });
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      pauseOnHover: false,
      appendDots: dots => (
        <div
          style={{
            borderRadius: "10px",
            border: "none",
            paddingLeft: "13px",
            top: "225px",
            width: "60px",
            height: "150px",
          }}
        >
          <ul style={{
            margin: "0px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            }}> {dots} </ul>
          
          <div className="slider_btn_area" style={{ textAlign: "center" }}>
            <button className={ this.state.isPause ? "slider_btn_play active" : "slider_btn_play"} onClick={this.play}></button>
            <button className="slider_btn_pause" onClick={this.pause}></button>
          </div>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "black",
            // border: "1px blue solid"
          }}
        >
          {i + 1}
        </div>
      )
    };
    return (
      <div className="main_header_slider_area">
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div className="main_header_slider_cntnt">
            <div>
              <div></div>
              <div>
                <p>1교육의 항로를</p>
                <p>바꿉니다.</p>
                <p>더 중요한 일에 집중할 수 있도록 편항은 관리자의</p>
                <p>편리함과 사용자의 합습 능률 극대화를 위해 존재합니다.</p>
              </div>
            </div>
            <img src="/images/main/main_header1.png"/>
          </div>
          <div className="main_header_slider_cntnt">
            <div>
              <div></div>
              <div>
                <p>2교육의 항로를</p>
                <p>바꿉니다.</p>
                <p>더 중요한 일에 집중할 수 있도록 편항은 관리자의</p>
                <p>편리함과 사용자의 합습 능률 극대화를 위해 존재합니다.</p>
              </div>
            </div>
            <img src="/images/main/main_header2.png"/>
          </div>
        </Slider>
      </div>
    );
  }
}