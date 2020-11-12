import { combineReducers } from 'redux';
import authentication from './authentication';

import feed from './feed'

const rootReducer = combineReducers({
  authentication,
  feed
});

export default rootReducer;
