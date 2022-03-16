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
        title: '- QR관리',
        path: '/manage/attend/qrManage',
        
      },
      {
        title: '- 입퇴실인원 현황',
        path: '/overview/revenue',
        
      },
      {
        title: '- 출석확인',
        path: '/manage/attend/attendState',
        
      }
    ]
  },
  {
    title: '수강생관리',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: '- 입교생 관리카드',
        path: '/manage/student/studentManage',

        cName: 'sub-nav'
      },
      {
        title: '- 학습성취도',
        path: '/manage/student/academicAchieve',

        cName: 'sub-nav'
      },
      {
        title: '- 수료처리',
        path: '/manage/student/completeProcess',
      },
      {
        title: '- 수강생 상담',
        path: '/manage/student/studentConsult',
      }
    ]
  },
  {
    title: '강의관리',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: '- 실시간 강의',
        path: 'manage/lecture/liveLecture',

        cName: 'sub-nav'
      },
      {
        title: '- 녹화 강의',
        path: 'manage/lecture/recordLecture',

        cName: 'sub-nav'
      },
      {
        title: '- 강의 개설',
        path: 'manage/lecture/createLecture',
      }
    ]
  },
  {
    title: '학습자료',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: '- 강의자료',
        path: '/manage/learn/lectureData',

        cName: 'sub-nav'
      },
      {
        title: '- 과제',
        path: '/manage/learn/report',

        cName: 'sub-nav'
      },
    ]
  },
];