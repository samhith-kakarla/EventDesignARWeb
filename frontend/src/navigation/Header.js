import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// import { NavLink } from 'react-router-dom';
import { unsetUser as reduxUnsetUser } from '../redux/actions/userActions';
import { logout as firebaseLogout } from '../firebase/auth';

const HeaderBar = () => {
  const dispatch = useDispatch();
  const unsetUser = () => dispatch(reduxUnsetUser());


  const logout = async () => {
    const error = await firebaseLogout();

    if (error !== '') {
      window.alert('Logout failed. Please try again.');
    } else {
      unsetUser();
    };
  }

  return (
    <nav className="bg-gray-two flex fixed w-full justify-between items-center py-8 px-72" role="navigation">
      <p className="font-bold text-gray-three text-2xl">LOGO</p>
      <button onClick={logout} className="bg-orange-three hover:bg-orange-two transition duration-300 ease-in-out text-white p-2 px-8 text-xl font-bold rounded-md">LOGOUT</button>
    </nav>
  );
};

HeaderBar.propTypes = {};

export default HeaderBar;