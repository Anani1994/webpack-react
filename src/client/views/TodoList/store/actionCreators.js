import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  TOGGLE_TASK_STATUS,
  EDIT_TASK_INFO,
} from './actionTypes';

export const getInputChange = value => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const getAddTodoItem = item => ({
  type: ADD_TODO_ITEM,
  item,
});

export const getDeleteTodoItem = index => ({
  type: DELETE_TODO_ITEM,
  index,
});

export const getToggleTaskStatus = index => ({
  type: TOGGLE_TASK_STATUS,
  index,
});

export const getEditTaskInfo = (value, index) => ({
  type: EDIT_TASK_INFO,
  value,
  index,
});
