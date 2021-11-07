import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { MdMail } from 'react-icons/md';
import { FaLock, FaUser } from 'react-icons/fa';
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
    <div className="flex justify-center">
      <div className="mt-20">
        <p className="text-xs font-bold my-2 text-orange-one">NAME</p>
        <div className="flex flex-row bg-gray-one text-gray-three rounded-md border-gray-three border p-1 mb-4">
          <div>
            <FaUser
              color="#7B8794"
              className="p-2"
              size={35}
            />
          </div>
          <input 
            type="text"
            value={name}
            onChange={(e) => {
              setError();
              setName(e.target.value);
            }}
            placeholder="Full Name"
            autoCapitalize="none"
            className="flex-1 ml-2 text-gray-three bg-gray-one rounded-md focus:outline-none w-72"
          />
        </div>
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
        <button className="bg-orange-three hover:bg-orange-two transition duration-300 ease-in-out text-white m-auto w-full p-2 font-bold rounded-md mt-6">SIGN UP</button>
        <div className="flex mt-6">
          <p className=" text-gray-three">Already have an account?    <Link to="/" className="text-orange-one hover:text-orange-two transition duration-300 ease-in-out font-semibold ml-3">Login</Link> </p>
        </div>
      </div>
    </div>
  )
}

SignUpPage.propTypes = {};

export default SignUpPage;