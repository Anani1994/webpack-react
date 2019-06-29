import { combineReducers } from 'redux-immutable';
import { reducer as todoReducer } from '../views/TodoList/store';

const reducers = combineReducers({
  todo: todoReducer,
});

export default reducers;
