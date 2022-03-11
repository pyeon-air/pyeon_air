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
        top:"200px",
        left:"-100px",
        zIndex: "1",
        width: "50px",
        fontSize: "100px",
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
        top:"200px",
        right:"-100px",
        zIndex: "1",
        width: "50px",
        fontSize: "100px",
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
    this.Slider.slickPlay();
    if( this.state.isPause == false ) this.setState({ isPause: true });
    else this.setState({ isPause: false });
  }
  pause() {
    this.slider.slickPause();
    if( this.state.isPause == false ) this.setState({ isPause: true });
    else this.setState({ isPause: false });
    // console.log(1);
  }

  render() {

    const settings = {
      // dots: true,
      infinite: true,
      // fade: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      pauseOnHover: true,
    };
    return (
      <div className="main_footer_slider_area">
        <h2>사람들</h2>
        <Slider {...settings}>
          <div className="main_footer_slider">
            <img className="main_footer_slider_img" src="/images/main/main_footer_face_1.png"/>
            <div className="main_footer_slider_info">
              <span>이주연</span>
              <span>기획자</span>
            </div>
          </div>
          <div className="main_footer_slider">
          <img className="main_footer_slider_img" src="/images/main/main_footer_face_2.png"/>
            <div className="main_footer_slider_info">
              <span>오현경</span>
              <span>디자이너</span>
            </div>
          </div>
          <div className="main_footer_slider">
          <img className="main_footer_slider_img img_3rd" src="/images/main/main_footer_face_3.png"/>
            <div className="main_footer_slider_info">
              <span>함동훈</span>
              <span>프론트엔드</span>
            </div>
          </div>
          <div className="main_footer_slider">
          <img className="main_footer_slider_img" src="/images/main/main_footer_face_4.png"/>
            <div className="main_footer_slider_info">
              <span>이상길</span>
              <span>백엔드</span>
            </div>
          </div>
          <div className="main_footer_slider">
          <img className="main_footer_slider_img" src="/images/main/main_footer_face_5.png"/>
            <div className="main_footer_slider_info">
              <span>심동민</span>
              <span>백엔드</span>
            </div>
          </div>
          <div className="main_footer_slider">
          <img className="main_footer_slider_img" src="/images/main/main_footer_face_6.png"/>
            <div className="main_footer_slider_info">
              <span>조재우</span>
              <span>백엔드</span>
            </div>
          </div>
          <div className="main_footer_slider">
          <img className="main_footer_slider_img" src="/images/main/main_footer_face_7.png"/>
            <div className="main_footer_slider_info">
              <span>안병준</span>
              <span>백엔드</span>
            </div>
          </div>
        </Slider>
          {/* <div className="slider_btn_area" style={{ textAlign: "center" }}>
            <button className={ this.state.isPause ? "slider_btn_play active" : "slider_btn_play"} onClick={this.play}></button>
            <button className="slider_btn_pause" onClick={this.pause}></button>
          </div> */}
      </div>
    );
  }
}