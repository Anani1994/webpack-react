import orderBy from 'lodash/orderBy';
import React, { Component } from 'react';
import TodoListUI from './components/TodoListUI';
import store from '../../store';
import { actionCreators } from './store';

/**
 * @description
 * 根据输入的内容改变状态中对应的 value 的值
 * @param {object} e 事件对象
 * @returns {void}
 */
const handleInputChange = (e) => {
  const { value } = e.target;
  store.dispatch(actionCreators.getInputChange(value));
};

/**
 * @description
 * 移除 todo 项
 * @param {number} index 操作 todo 项的下标
 * @returns {void}
 */
const handleDeleteClick = (index) => {
  store.dispatch(actionCreators.getDeleteTodoItem(index));
};

/**
 * @description
 * 编辑 todo 项的完成状态
 * @param {number} index 操作项的下标
 * @returns {void}
 */
const toggleTaskStatus = (index) => {
  store.dispatch(actionCreators.getToggleTaskStatus(index));
};

/**
 * @description
 * 改变 todo 项的描述文案
 * @param {object} e 事件对象
 * @param {number} index 操作项的下标
 */
const editTaskInfo = (e, index) => {
  const { value } = e.target;
  store.dispatch(actionCreators.getEditTaskInfo(value, index));
};

class TodoList extends Component {
  constructor(props) {
    super(props);
    // 从仓库获取数据
    this.state = store.getState();
    // 获取当前最大的 id 值作为下一项的基础
    const { list } = this.state;
    this.id = orderBy(list, 'id', 'desc')[0].id;
    // 绑定函数的 this 指向
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // 当仓库的数据改变时 store.subscrib 中传入的方法将会被执行，这里用来更新状态的数据
    store.subscribe(this.handleStoreChange);
  }

  /**
   * @description
   * 从仓库中获取数据更新组件状态
   * @returns {void}
   */
  handleStoreChange() {
    this.setState(store.getState());
  }

  /**
   * @description
   * 添加 todo 项
   * @param {object} e 事件对象
   * @returns {void}
   */
  handleSubmit(e) {
    e.preventDefault();
    const { value } = this.state;
    const item = {
      id: (this.id += 1),
      done: false,
      info: value,
    };
    store.dispatch(actionCreators.getAddTodoItem(item));
  }

  render() {
    const {
      state: { value, list },
      handleSubmit,
    } = this;
    return (
      <TodoListUI
        value={value}
        list={list}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        toggleTaskStatus={toggleTaskStatus}
        editTaskInfo={editTaskInfo}
        handleDeleteClick={handleDeleteClick}
      />
    );
  }
}

export default TodoList;
