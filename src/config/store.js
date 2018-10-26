import { createStore, compose } from 'redux'
import rootReducer from '../reducers'

import { reactReduxFirebase } from 'react-redux-firebase';
import * as firebase from 'firebase';
import firebaseConfig from './firebase';

firebase.initializeApp(firebaseConfig);

const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, config)
)(createStore)

const initialState = {}

const configStore = createStoreWithFirebase(rootReducer, initialState)

export default configStore

