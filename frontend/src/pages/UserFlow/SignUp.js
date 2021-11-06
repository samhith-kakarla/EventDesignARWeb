import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setUser as reduxSetUser, unsetUser as reduxUnsetUser } from '../../redux/actions/userActions';
import { signup } from '../../firebase/auth';
import { createNewUser } from '../../firebase/user';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const signupUser = (userId, fullName, email) => dispatch(reduxSetUser(userId, fullName, email));
  const signupUserFailed = () => dispatch(reduxUnsetUser());

  const handleSignUp = async () => {
    const error = await signup(
      name,
      email,
      password,
      async (userId, userEmail, userName) => {
        signupUser(userId, userEmail, userName);
        const error = await createNewUser({
          userId: userId,
          email: userEmail,
          name: userName,
        });

        setError(error);
        if (error !== '') {
          signupUserFailed();
        }
      },
    );

    setError(error);
    if (error !== '') {
      signupUserFailed();
    }
  };

  return (
    <div></div>
  )
}

SignUpPage.propTypes = {};

export default SignUpPage;