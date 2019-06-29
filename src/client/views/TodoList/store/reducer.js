import { Map } from 'immutable';
import {
  INIT_TODO,
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  TOGGLE_TASK_STATUS,
  EDIT_TASK_INFO,
} from './actionTypes';

// 默认数据
const defaultState = Map({
  value: '',
});

const reducer = (state = defaultState, action) => {
  const stateBak = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case INIT_TODO:
      return state.set('list', action.data);
    case CHANGE_INPUT_VALUE:
      return state.set('value', action.value);
    case ADD_TODO_ITEM:
      stateBak.list.push(action.item);
      return state.merge({
        list: stateBak.list,
        value: '',
      });
    case DELETE_TODO_ITEM:
      return state.deleteIn(['list', action.index]);
    case TOGGLE_TASK_STATUS:
      return state.updateIn(['list', action.index, 'done'], done => !done);
    case EDIT_TASK_INFO:
      return state.setIn(['list', action.index, 'info'], action.value);
    default:
      return state;
  }
};

export default reducer;
