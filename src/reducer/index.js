import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  pageReducer,
  taskReducer,
});

export default rootReducer;
