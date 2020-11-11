import { combineReducers } from 'redux';
import authentication from './authentication';
import pixr from './pixr'
import feed from './feed'

const rootReducer = combineReducers({
  feed,
  authentication,
  pixr,

});

export default rootReducer;
