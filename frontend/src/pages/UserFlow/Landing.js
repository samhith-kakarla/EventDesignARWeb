import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { MdMail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
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
    <div className="flex justify-center">
      <div className="mt-20">
        <p className="text-xs font-bold my-2 text-orange-one">EMAIL</p>
        <div className="flex flex-row bg-gray-one text-gray-three rounded-md border-gray-three border p-1 mb-4">
          <div>
            <MdMail 
              color="#7B8794"
              className="p-2"
              size={35}
            />
          </div>
          <input 
            type="text"
            value={email}
            onChange={(e) => {
              setError();
              setEmail(e.target.value);
            }}
            placeholder="name@email.com"
            autoCapitalize="none"
            className="flex-1 ml-2 text-gray-three bg-gray-one rounded-md focus:outline-none w-72"
          />
        </div>
        <p className="text-xs font-bold my-2 text-orange-one">PASSWORD</p>
        <div className="flex flex-row bg-gray-one text-gray-three rounded-md border-gray-three border p-1">
          <div>
            <FaLock 
              color="#7B8794"
              className="p-2"
              size={35}
            />
          </div>
          <input 
            type="password"
            value={password}
            onChange={(e) => {
              setError();
              setPassword(e.target.value);
            }}
            placeholder="**********"
            autoCapitalize="none"
            className="flex-1 ml-2 text-gray-three bg-gray-one rounded-md focus:outline-none w-72"
          />
        </div>
        <button className="bg-orange-three hover:bg-orange-two transition duration-300 ease-in-out text-white m-auto w-full p-2 font-bold rounded-md mt-6">LOGIN</button>
        <div className="flex mt-6">
          <p className=" text-gray-three">Don't have an account yet?    <Link to="/signup" className="text-orange-one hover:text-orange-two transition duration-300 ease-in-out font-semibold ml-3">Sign Up</Link> </p>
        </div>
      </div>
    </div>
  );
};

LandingPage.propTypes = {};

export default LandingPage;