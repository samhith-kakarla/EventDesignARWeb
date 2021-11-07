import React from 'react';
// import PropTypes from 'prop-types';

// import { NavLink } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <nav className="bg-gray-two flex fixed w-full justify-between items-center py-3 px-72" role="navigation">
      <p className="font-bold text-gray-three">LOGO</p>
      <button className="bg-orange-three hover:bg-orange-two transition duration-300 ease-in-out text-white p-2 px-4 text-xs font-bold rounded-md">LOGOUT</button>
    </nav>
  );
};

HeaderBar.propTypes = {};

export default HeaderBar;