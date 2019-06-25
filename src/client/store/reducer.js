import { combinReducers } from 'redux';
import { reducer as todoReducer } from '../views/TodoList/store';

const reducers = combinReducers({
  todo: todoReducer,
});

export default reducers;
