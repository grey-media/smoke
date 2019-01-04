import { combineReducers } from 'redux';
import userData from './user';
import cloneData from './clone';
import appData from './data';

export default combineReducers({
  userData,
  cloneData,
  appData,
});
