import authReducer from './authReducer';
import { bankReducer } from './bankReducer';
import { modeReducer } from './modeReducer';

import { combineReducers } from 'redux';

export const rootReducers = combineReducers({
  auth: authReducer,
  banking: bankReducer,
  mode: modeReducer,
});
