import { initializeApp } from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import * as firebaseFirestore from 'firebase/firestore/lite';

// import {
//   FIREBASE_API_KEY,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
//   FIREBASE_MESSAGE_SENDER_ID,
//   FIREBASE_APP_ID,
// } from '../constants';

const firebaseConfig = {
  apiKey: 'AIzaSyC-XzN5OnDS18rpmHpb8m0AcvIHYCi95Ic',
  authDomain: 'eventdesignar.firebaseapp.com',
  projectId: 'eventdesignar',
  storageBucket: 'eventdesignar.appspot.com',
  messagingSenderId: '464530949252',
  appId: '1:464530949252:web:52fef1e5caa30b9cbb2ed1',
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = firebaseAuth.getAuth(firebaseApp);
export const firestore = firebaseFirestore.getFirestore(firebaseApp);

export default firebaseApp;