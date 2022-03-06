import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: '출석관리',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '- QR 관리',
        path: '/overview/users',
        
      },
      {
        title: '- 입퇴실인원 현황',
        path: '/overview/revenue',
        
      },
      {
        title: '- 출석확인',
        path: '/overview/revenue',
        
      }
    ]
  },
  {
    title: '수강생관리',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav:[]
    // subNav: [
    //   {
    //     title: 'Reports',
    //     path: '/reports/reports1',

    //     cName: 'sub-nav'
    //   },
    //   {
    //     title: 'Reports 2',
    //     path: '/reports/reports2',

    //     cName: 'sub-nav'
    //   },
    //   {
    //     title: 'Reports 3',
    //     path: '/reports/reports3',
    //   }
    // ]
  },
  {
    title: '강의관리',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
 
  {
    title: '학습자료',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
 
  
];