import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Link, Redirect } from 'react-router-dom';
import { MdMail } from 'react-icons/md';
import { FaLock, FaUser } from 'react-icons/fa';
import { setUser as reduxSetUser, unsetUser as reduxUnsetUser } from '../../redux/actions/userActions';
import { signup } from '../../firebase/auth';
import { createNewUser } from '../../firebase/user';

const SignUpPage = () => {
  const userId = useSelector((state) => state.user.userId);
  const isAuthenticated = userId && userId.length > 0;

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
        console.log(userId);
        signupUser(userId, userEmail, userName);
        const error = await createNewUser({
          userId: userId,
          email: userEmail,
          name: userName,
        });
        console.log("signed up");

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

  if (isAuthenticated) {
    return <Redirect to="/home" push />
  }

  return (
    <div className="flex justify-center">
      <div className="mt-40">
        <p className="text-lg font-bold my-2 text-orange-one">NAME</p>
        <div className="flex flex-row bg-gray-one text-gray-three rounded-md border-gray-three border p-1 mb-4">
          <div>
            <FaUser
              color="#7B8794"
              className="p-3"
              size={55}
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
            className="flex-1 ml-2 text-xl text-gray-three bg-gray-one rounded-md focus:outline-none w-96"
          />
        </div>
        <p className="text-lg mt-5 font-bold my-2 text-orange-one">EMAIL</p>
        <div className="flex flex-row bg-gray-one text-gray-three rounded-md border-gray-three border p-1 mb-4">
          <div>
            <MdMail 
              color="#7B8794"
              className="p-3"
              size={55}
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
            className="flex-1 ml-2 text-xl text-gray-three bg-gray-one rounded-md focus:outline-none w-96"
          />
        </div>
        <p className="text-lg mt-5 font-bold my-2 text-orange-one">PASSWORD</p>
        <div className="flex flex-row bg-gray-one text-gray-three rounded-md border-gray-three border p-1">
          <div>
            <FaLock 
              color="#7B8794"
              className="p-3"
              size={55}
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
            className="flex-1 ml-2 text-xl text-gray-three bg-gray-one rounded-md focus:outline-none w-96"
          />
        </div>
        <button onClick={handleSignUp} className="bg-orange-three hover:bg-orange-two transition duration-300 ease-in-out text-white m-auto w-full text-xl p-3 font-bold rounded-md mt-8">SIGN UP</button>
        <p className=" text-gray-three mt-6 text-xl text-center">Already have an account?    <Link to="/" className="text-orange-one hover:text-orange-two transition duration-300 ease-in-out font-semibold ml-3">Login</Link> </p>
        {error !== '' && (
          <p className="text-center text-red-600 text-xs mt-6">{error}</p>
        )}
      </div>
    </div>
  )
}

SignUpPage.propTypes = {};

export default SignUpPage;