import { combineReducers } from 'redux';
import authentication from './authentication';
import pixr from './pixr'
import feed from './feed'

const rootReducer = combineReducers({
  authentication,
  pixr, 
  feed
});

export default rootReducer;
