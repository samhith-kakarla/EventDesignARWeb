import { firestore as firebaseFirestore } from './config';
import { doc, setDoc, getDoc } from 'firebase/firestore/lite';

export const createNewUser = async (user) => {
  try {
    const userDocRef = await setDoc(
      doc(firebaseFirestore, 'users', user.userId), 
      { email: user.email, fullName: user.name },
    );
    console.log(userDocRef);

    return '';
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const getUserInfo = async (user, thenFunc) => {
  try {
    const userInfo = await getDoc(doc(firebaseFirestore, 'users', user.userId));

    await thenFunc(userInfo.data());
    return '';
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
