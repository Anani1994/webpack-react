import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  TOGGLE_TASK_STATUS,
  EDIT_TASK_INFO,
} from './actionTypes';

// 默认数据
const defaultState = {
  value: '',
  list: [
    { id: 1, done: false, info: 'learn python' },
    { id: 2, done: true, info: 'learn javascript' },
    { id: 3, done: false, info: 'learn java' },
  ],
};

const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newState.value = action.value;
      return newState;
    case ADD_TODO_ITEM:
      newState.list.push(action.item);
      newState.value = '';
      return newState;
    case DELETE_TODO_ITEM:
      newState.list.splice(action.index, 1);
      return newState;
    case TOGGLE_TASK_STATUS:
      newState.list[action.index].done = !newState.list[action.index].done;
      return newState;
    case EDIT_TASK_INFO:
      newState.list[action.index].info = action.value;
      return newState;
    default:
      return state;
  }
};

export default reducer;
