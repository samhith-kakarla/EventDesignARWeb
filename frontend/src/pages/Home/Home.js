import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Redirect, Link } from 'react-router-dom';

const HomePage = () => {
  const userId = useSelector((state) => state.user.userId);
  const isAuthenticated = userId && userId.length > 0;
  const userFullName = useSelector((state) => state.user.fullName);

  if (!isAuthenticated) {
    return <Redirect to="/" />
  }
  
  return (
    <div className="px-96 pt-24">
      <h1 className="text-white font-semibold text-2xl">Hello, {userFullName}!</h1>
      <Link to="/create">CREATE</Link>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;