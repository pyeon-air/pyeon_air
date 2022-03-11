import React from 'react';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import $, { isFunction } from "jquery"


const SidebarLink = styled.div`
display: flex;
color: #e1e9fc;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;
width: 80%;
margin: 0 auto;
border-radius:50px ;
cursor: pointer;
&:active {
  background: #0ca783;
  /* border-left: 4px solid #632ce4; */
  cursor: pointer;
}
&.active{
  background-color: #0ca783;
  border: 50px;
}
&:hover{
  background-color: #ff8f1f;
  color:#f5f5f5;
  transition-duration: 0.5s;
}
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled.div`
  background: #29c39f;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background-color: #f5f5f5;
    color:#29c39f;
    cursor: pointer;
    transition-duration: 0.5s;
  }
`;

const LinkGrp = styled.div`
  margin:0;
  display:none;
  &.active{
    background-color: #0ca783;
    animation: boxFade 0.2s 1s linear alternate;
    display:block;
  }
  @keyframes boxFade {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  :hover {
    background-color: #94a9ff;
    transition-duration: 0.5s;
  }
`;
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const [isActive, setActive] = useState(false);
  const showSubnav = () => {
    setSubnav(!subnav);
    setActive(!isActive);
  }

  useEffect(()=>{
      $("[name='linkUrl']").on("click", function(){
        // alert(1);
        window.location.href = $(this).attr('to');
      });
      $("[name='linkFolder']").on("click", function(){
        // console.log(1);
        setSubnav(false);
        $("[name='linkFolder'] .active").removeClass('active');
      });
  });
  
  // const toggleClass = () => {

  // };
  
  return (
    
    <>

      <SidebarLink name="linkFolder" to={item.path} onClick={ showSubnav }  className={subnav ? 'active' : null}>
        <div>
          {item.icon}
          <SidebarLabel >{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      <LinkGrp className={subnav ? 'linkGrp active' : 'linkGrp'}>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <DropdownLink name="linkUrl" to={item.path} key={index}>
                {item.icon}
                <SidebarLabel to={item.path}>{item.title}</SidebarLabel>
              </DropdownLink>
            );
          })
        }
      </LinkGrp>
    </>
  );
  
};

export default SubMenu;