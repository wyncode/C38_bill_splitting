import React, { useState } from 'react';
import { IoMdContact } from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebardata';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Navbar } from 'react-bootstrap';
import Logo from '../assets/Logo.png';

function HomeNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Navbar className="homenav justify-content-between">
        <Navbar.Brand href="./home">
          <img
            src={Logo}
            alt="Cuentalogo"
            style={{
              width: '100px'
            }}
          />
        </Navbar.Brand>
        <IconContext.Provider value={{}}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <IoMdContact onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars1">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                const CustomComponent = item.customComponent;

                return (
                  <li key={index} className={item.cName}>
                    {CustomComponent ? (
                      <CustomComponent />
                    ) : (
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </Navbar>
    </>
  );
}

export default HomeNav;
