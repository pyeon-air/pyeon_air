import React from 'react';
import './Home.css';
import Slider from './Slider'
import {useEffect, useState} from 'react';
import $ from "jquery"

const Home = () => {

  const [text, setText] = useState();

//   useEffect(()=>{
//       $(".main_header_login").mousedown(function () {
//         window.location.href = "/login";
//       });
//   }, []);

  function handleClick() {
    window.location.href = "/login";
  }

    return (
        <>
        <div className='main_area'>
            <div className='main_wrap'>
                {/* <div className='main_header_wrap'> */}
                    <div className='main_header_logo'></div>
                    <div className='main_header_login' onClick={handleClick}>로그인</div>
                    {/* <div className='main_slider_btn'>
                    </div> */}
                    {/* <div className='main_slider_cntnt'>
                    </div> */}
                        <Slider />
                {/* </div> */}
                <div className='main_body_wrap'>
                    <div className='main_body_header'></div>
                    <div className='main_body_1'>
                        <h2>편항으로 편해지는 에듀라이프</h2>
                        <h3>FOCUS ON ALL YOU NEED</h3>
                    </div>
                    <div className='main_body_2'>
                        <div className='main_body_2_image'></div>
                        <div>
                            <p>편리한 구성으로 학습 능률은 높게</p>
                            <p>· 학습이 필요한 모든 프로세스를 한 곳에서 파악</p>
                            <p>· 흥미요소를 통한 들어오고 싶은 플랫폼 구성</p>
                        </div>
                    </div>
                    <div className='main_body_3'>
                        <div className='main_body_3_image'></div>
                        <div>
                            <p>실시간 영상처리 기술로 실강청럼 실감나게</p>
                            <p>· 실시간 영상 돌려보기 기술로 놓 치는 부분이 없도록</p>
                            <p>· 강의 종료 후 바로 다시보기 가능</p>
                        </div>
                    </div>
                    <div className='main_body_4'>
                        <div className='main_body_4_image'></div>
                        <div>
                            <p>자동화 기반 학습관리로 편하게</p>
                            <p>· 대시보드로 학습 전체현황과 학습 패턴을 한 눈에 확인</p>
                            <p>· 반복업무 제거를 통한 관리자 공수 최소화 가능</p>
                            <p>· 원클릭 학습 데이터 다운로드로 손쉬운 보고자료 작성 가능</p>
                        </div>
                    </div>
                    <div className='main_body_5'>
                        <div className='main_body_5_image'></div>
                        <div>
                            <p>학습관리와 행정관리를 한번에</p>
                            <p>· DB축적, 원클릭으로 데이터 다운 가능</p>
                            <p>· 학습 데이터 기반 행정관리 원스톱</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='main_team_wrap'>
            {/* <Slider /> */}
        </div>
        <div className='main_footer_wrap'>
            <div className='main_footer_logo'></div>
            <div className='main_footer_copyright'>
                COPYRIGHTⓒ 2022 PYEONHANG ALL RIGHTS RESERVED.
            </div>
            <div className='main_footer_policy'>
                <p onClick="alert('준비중입니다.');">이용약관</p>
                <p>│</p>
                <p onClick="alert('준비중입니다.');">개인정보처리방침</p>
            </div>
        </div>
        </>
    );
};

export default Home;