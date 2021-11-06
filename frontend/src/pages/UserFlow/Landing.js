import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'

import { setUser as reduxSetUser, unsetUser as reduxUnsetUser } from '../../redux/actions/userActions';
import { login } from '../../firebase/auth';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const loginUser = (userId, fullName, email) => dispatch(reduxSetUser(userId, fullName, email));
  const loginUserFailed = () => dispatch(reduxUnsetUser());

  const handleLogin = async () => {
    const error = await login(email, password, async (userCred) => {
      const userId = userCred.user.uid;
      const email = userCred.user.email;
      const fullName = userCred.user.displayName;
      loginUser(userId, email, fullName);
    });

    setError(error);
    if (error !== '') {
      loginUserFailed();
    }
  };

  return (
    <div></div>
  );
};

LandingPage.propTypes = {};

export default LandingPage;