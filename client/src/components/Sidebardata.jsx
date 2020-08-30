import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import LogoutButton from './Logout';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Bill History',
    path: '/billhistory',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/login',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
    customComponent: LogoutButton
  }
];
