import { combineReducers } from 'redux';
import userData from './user';
import cloneData from './clone';
import appData from './data';
import journalData from './journal';

export default combineReducers({
  userData,
  cloneData,
  appData,
  journalData,
});
