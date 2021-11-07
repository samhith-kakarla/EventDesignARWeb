import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Redirect } from 'react-router-dom';

const HomeTabsPage = () => {
  const userId = useSelector((state) => state.user.userId);
  const isAuthenticated = userId && userId.length > 0;

  if (!isAuthenticated) {
    return <Redirect to="/" />
  }
  
  return (
    <div></div>
  );
};

HomeTabsPage.propTypes = {};

export default HomeTabsPage;