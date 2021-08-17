import authReducer from './authReducer';
import { bankReducer } from './bankReducer';

import { combineReducers } from 'redux';

export const rootReducers = combineReducers({
  auth: authReducer,
  banking: bankReducer,
});
