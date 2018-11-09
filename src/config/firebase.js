import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCYhv1TK8imnM6TusLd_mmUvyHMibM5D70',
  authDomain: 'smokekiller-bb6ba.firebaseapp.com',
  databaseURL: 'https://smokekiller-bb6ba.firebaseio.com',
  projectId: 'smokekiller-bb6ba',
  storageBucket: 'smokekiller-bb6ba.appspot.com',
  messagingSenderId: '692115286074',
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export const auth = firebase.auth();

export const storage = firebase.storage();
