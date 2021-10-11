import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebase = initializeApp({
  apiKey: 'AIzaSyAUHWRmI98qwhJTDn1tU0rUSF6NtZDY2Uk',
  authDomain: 'pruebas-react-76146.firebaseapp.com',
  projectId: 'pruebas-react-76146',
  storageBucket: 'pruebas-react-76146.appspot.com',
  messagingSenderId: '395515336685',
  appId: '1:395515336685:web:bfc152ed70868798cc79e4',
});

export const db = getFirestore(firebase);
