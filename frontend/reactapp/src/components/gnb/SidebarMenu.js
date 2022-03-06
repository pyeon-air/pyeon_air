import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const [isActive, setActive] = useState(false);
  const showSubnav = () => {
    setSubnav(!subnav);
    setActive(!isActive);


  }
  const toggleClass = () => {
 
  };


  return (
    
    <>

      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}  className={subnav ? 'active' : null}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;