import { combineReducers } from 'redux-immutable';
import { reducer as localeReducer } from '../i18n/store';
import { reducer as todoReducer } from '../views/TodoList/store';

const reducers = combineReducers({
  i18n: localeReducer,
  todo: todoReducer,
});

export default reducers;
