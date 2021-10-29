import * as firebase from 'firebase';
// import * as FileSystem from 'expo-file-system';

import { firebaseAuth } from './config';
import { ACTION_CODE_SETTINGS } from '../config';

export const signup = async (name, email, password, thenFunc) => {
  try {
    const userCred = await firebaseAuth.createUserWithEmailAndPassword(
      email,
      password,
    );

    const userId = userCred.user.uid;
    const userEmail = userCred.user.email;
    const user = firebaseAuth.currentUser;
    await user
      .updateProfile({ displayName: name })
      .then(() => console.log('Profile updated'))
      .catch((error) => console.log(error));

    await thenFunc(userId, userEmail, user.displayName);
    return '';
  } catch (error) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'This email is already registered. Please login';
      case 'auth/invalid-email':
        return 'Invalid email';
      case 'auth/weak-password':
        return 'Password must be 6 or more characters long';
      default:
        console.log(error); // TODO: handle error
        return 'Unknown handleSignUp Error';
    }
  }
};

export const login = async (email, password, thenFunc) => {
  try {
    const userCred = await firebaseAuth.signInWithEmailAndPassword(
      email,
      password,
    );
    await thenFunc(userCred);
    return '';
  } catch (error) {
    switch (error.code) {
      case 'auth/user-not-found':
        return 'User does not exist. Please create an account';
      case 'auth/invalid-email':
        return 'Invalid email';
      case 'auth/wrong-password':
        return 'Incorrect email or password';
      default:
        console.log(error); // TODO: handle error
        return 'Unknown handleLogin Error';
    }
  }
};

export const changePassword = async (
  currentPassword,
  newPassword,
  thenFunc,
) => {
  try {
    const user = firebaseAuth.currentUser;
    const userCred = firebase.default.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword,
    );
    await user.reauthenticateWithCredential(userCred);
    const authenticatedUser = firebaseAuth.currentUser;
    await authenticatedUser.updatePassword(newPassword);
    await thenFunc();
    return '';
  } catch (error) {
    switch (error.code) {
      case 'auth/weak-password':
        return 'New password must be 6 or more characters.';
      case 'auth/wrong-password':
        return 'Incorrect Password';
      case 'auth/invalid-email':
        return 'User email is not valid.';
      case 'auth/user-not-found':
        return 'This user was not found. Please sign up.';
      default:
        return 'Error changing password. Please try again.';
    }
  }
};

export const sendPasswordResetLink = async (email, thenFunc) => {
  try {
    await firebaseAuth.sendPasswordResetEmail(email, ACTION_CODE_SETTINGS);
    await thenFunc();
    return '';
  } catch (error) {
    switch (error.code) {
      case 'auth/invalid-email':
        return 'Invalid email';
      case 'auth/user-not-found':
        return 'User does not exist. Please make an account';
      default:
        console.log(error); // TODO: handle error
        return 'Unknown sendPasswordResetLink Error';
    }
  }
};

export const resetPassword = async (resetCode, newPassword, thenFunc) => {
  try {
    await firebaseAuth.verifyPasswordResetCode(resetCode);
    await firebaseAuth.confirmPasswordReset(resetCode, newPassword);
    await thenFunc();
    return '';
  } catch (error) {
    switch (error.code) {
      case 'auth/weak-password':
        return 'Password must be 6 or more characters';
      case 'auth/expired-action-code':
        return 'Reset code expired. Please try sending a reset password link again';
      case 'auth/invalid-action-code':
        return 'Reset code invalid. Please try sending a reset password link again';
      default:
        console.log(error); // TODO: handle error
        return 'Unknown resetPassword Error';
    }
  }
};

export const logout = async (thenFunc, catchFunc) => {
  try {
    await firebaseAuth.signOut();
    await thenFunc();
  } catch (error) {
    catchFunc(error);
  }
};
