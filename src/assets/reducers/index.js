import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import texts from './texts'

export default combineReducers({
  routing: routerReducer,
  texts
})
