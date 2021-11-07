import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Redirect } from 'react-router-dom';

const HomePage = () => {
  const userId = useSelector((state) => state.user.userId);
  const isAuthenticated = userId && userId.length > 0;
  const userFullName = useSelector((state) => state.user.fullName);

  if (!isAuthenticated) {
    return <Redirect to="/" />
  }
  
  return (
    <div className="px-96 pt-16">
      Hello, {userFullName}!
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;