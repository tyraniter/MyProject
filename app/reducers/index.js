'use strict'

import {combineReducers} from 'redux';
import user from './user';
import nav from './nav';
import location from './location';
import payment from './payment';
import umbrella from './umbrella';

const rootReducer = combineReducers({
  user,
  nav,
  location,
  payment,
  umbrella,
});

export default rootReducer;