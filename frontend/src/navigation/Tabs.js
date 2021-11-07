import React from 'react';

import { NavLink } from 'react-router-dom';
import { FaHome, FaCamera } from 'react-icons/fa';
import './Tabs.css';

const TabsNavigation = () => {
  return (
    <nav className="bg-gray-two fixed-bottom px-96" role="navigation">
      {/* <Nav className="w-100"> */}
        <div className="flex flex-row justify-between w-100">
          {/* <NavItem key="Home-Tab"> */}
            <NavLink to="/home" className="nav-link bottom-nav-link transition duration-200 ease-in-out" activeClassName="active">
              <div className="flex justify-center items-center">
                <FaHome size={25} className="mt-5 mb-2" />
                {/* <div className="bottom-tab-label">Home</div> */}
              </div>
            </NavLink>
          {/* </NavItem> */}
          {/* <NavItem key="Camera-Tab"> */}
            <NavLink to="/camera" className="nav-link bottom-nav-link transition duration-200 ease-in-out" activeClassName="active">
              <div className="flex justify-center items-center">
                <FaCamera size={25} className="mt-5 mb-2" />
                {/* <div className="bottom-tab-label">Camera</div> */}
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