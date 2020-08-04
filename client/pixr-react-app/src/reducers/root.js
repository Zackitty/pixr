import { combineReducers } from 'redux';
import authentication from './authentication';
import pixr from './pixr'


const rootReducer = combineReducers({
  authentication,
  pixr
});

export default rootReducer;
