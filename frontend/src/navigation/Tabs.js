import React from 'react';

import { NavLink } from 'react-router-dom';
import { FaHome, FaCamera } from 'react-icons/fa';

const TabsNavigation = () => {
  return (
    <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
      {/* <Nav className="w-100"> */}
        <div className=" d-flex flex-row justify-content-around w-100">
          {/* <NavItem key="Home-Tab"> */}
            <NavLink to="/home" className="nav-link bottom-nav-link" activeClassName="active">
              <div className="row d-flex flex-column justify-content-center align-items-center">
                <FaHome />
                <div className="bottom-tab-label">Home</div>
              </div>
            </NavLink>
          {/* </NavItem> */}
          {/* <NavItem key="Camera-Tab"> */}
            <NavLink to="/camera" className="nav-link bottom-nav-link" activeClassName="active">
              <div className="row d-flex flex-column justify-content-center align-items-center">
                <FaCamera />
                <div className="bottom-tab-label">Camera</div>
              </div>
            </NavLink>
          {/* </NavItem> */}
        </div>
      {/* </Nav> */}
    </nav>
  )
};

TabsNavigation.propTypes = {};

export default TabsNavigation;