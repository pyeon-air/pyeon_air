import React , { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import attendance from '../../attendance.png';
import learning from '../../learning_icon.png';
import lecture from '../../lecture_icon.png';
import student from '../../student_icon.png';

const GnbWrap = styled.ul`
width: 100%;
height:calc(100% - 120px);
border-top-right-radius: 50px;
background-color: #29c39f;
margin-top:120px;

`;

const GnbmainLi = styled.li`
 padding-top:35px;
 color:#fff;
 width:250px;
`;

const GnbmainLiCircle = styled.div`
width: 200px;
height: 50px;

// background-color:#0ca783;
border-radius: 40px;
margin:0 auto;
line-height:50px;
padding-left: 45px;
color:#fff;
background-color:${props =>(props.active ? "#0ca783" :null)};
`;
const GnbText = styled.span`
margin-left:18px;
line-height:54px
`;


const GnbSubUl = styled.ul`
  width:100%;
  margin:20px auto 0 auto;
  display : ${props =>(props.active ? "block" : "none")}  
`;

const GnbSubLi = styled.li`
margin-top:24px;
color:#fff; 
padding-left:115px;
`;

const IconAttendance = styled.div`
background:url(${attendance});
width:25px;
height:30px
`;

const IconStudent = styled.div`
background:url(${student});
width:25px;
height:30px
`;

const Iconlecture = styled.div`
background:url(${lecture});
width:25px;
height:30px
`;

const IconLearning = styled.div`
background:url(${learning});
width:25px;
height:30px
`;

const tempStyle={
margin: "0 auto",
display : "flex",

alignItems: "center"
  }
  
  


const Gnb = () => {
//   const history = useNavigate();
const [active ,setActive] = useState(true)

const handleGnbClick = (e) => {
  setActive(!active);
}

  return (
      <>
        <GnbWrap>
          <GnbmainLi>
            <GnbmainLiCircle active className={active ? 'active' : null} onClick={handleGnbClick}>
              <div style={tempStyle}>          <IconAttendance></IconAttendance>
            <GnbText>출석관리</GnbText>
            </div>
            </GnbmainLiCircle>
            <GnbSubUl active >
                <GnbSubLi>
                  <Link to ="/mypage" >QR 관리</Link>
                </GnbSubLi>
                <GnbSubLi>
                     입퇴실인원 현황
                </GnbSubLi>
                <GnbSubLi>
                     출석 확인
                </GnbSubLi>
            </GnbSubUl>
          </GnbmainLi>
          <GnbmainLi>
          <GnbmainLiCircle className={active ? 'active' : null} onClick={handleGnbClick}>
          <div style={tempStyle}> 
          <IconStudent></IconStudent>
            <GnbText>수강생관리</GnbText>
          </div>
            </GnbmainLiCircle>
            <GnbSubUl>
            </GnbSubUl>
          </GnbmainLi>
          <GnbmainLi>
          <GnbmainLiCircle>
          <div style={tempStyle}> 
          <Iconlecture></Iconlecture>
            <GnbText>강의관리</GnbText>
            </div>
            </GnbmainLiCircle>
            <GnbSubUl>
            </GnbSubUl>
          </GnbmainLi>
          <GnbmainLi>
          <GnbmainLiCircle>
          <div style={tempStyle}> 
          <IconLearning></IconLearning>
            <GnbText>학습자료</GnbText>
            </div>
            </GnbmainLiCircle>
            <GnbSubUl>
            </GnbSubUl>
          </GnbmainLi>
          <div className='footer_icon'></div>
        </GnbWrap>
        </>
    )
}

export default Gnb;
