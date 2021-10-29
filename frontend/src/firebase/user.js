import { firebaseFirestore } from './config';

export const createNewUser = async (user) => {
  try {
    await firebaseFirestore
      .collection('users')
      .doc(user.userId)
      .set({ email: user.email, name: user.name });

    return '';
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const getUserInfo = async (user, thenFunc) => {
  try {
    const userInfo = await firebaseFirestore
      .collection('users')
      .doc(user.userId)
      .get();

    await thenFunc(userInfo);
    return '';
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
