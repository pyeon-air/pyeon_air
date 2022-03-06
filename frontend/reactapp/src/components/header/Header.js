import React from 'react'
import styled,{css} from 'styled-components';
import '../../font.css'

const HeaderWrap = styled.div`
background-color: #ffffff;
border-radius: 40px;
width: calc(1200px - 200px);
height: 80px;
box-shadow: 0px 5px 4.75px 0.25px rgba(0, 0, 0, 0.05);
`;
const HeaderTitle = styled.h1`
font-size:30px;
font-family: 'Noto Sans KR', 'sans-serif';
`;
const HeaderContainer = styled.div`
display:flex;
padding:0 30px;
justify-content: space-between;
line-height:80px;
`;
const HeaderIcon = styled.ul`
display:flex;

`;
const IconLI = styled.li`
margin-right:10px;
cursor: pointer;

`;

const Header = (props) => {
  return (
    <>
    <HeaderWrap>
        <HeaderContainer>
            <HeaderTitle>
                입퇴실 인원 현황
            </HeaderTitle>
            <HeaderIcon>
                <IconLI>
                    알림
                </IconLI>
                <IconLI>
                    내정보
                </IconLI>
            </HeaderIcon>
        </HeaderContainer>
        </HeaderWrap>
    </>
    )
}

export default Header;
