import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListUI from './components/TodoListUI';
import { actionCreators } from './store';

class TodoList extends Component {
  componentDidMount() {
    const { initTodoList } = this.props;
    initTodoList();
  }

  render() {
    const {
      value,
      list,
      handleSubmit,
      handleInputChange,
      toggleTaskStatus,
      editTaskInfo,
      handleDeleteClick,
    } = this.props;
    return (
      <TodoListUI
        value={value}
        list={list}
        handleInputChange={handleInputChange}
        handleSubmit={e => handleSubmit(e, this)}
        toggleTaskStatus={toggleTaskStatus}
        editTaskInfo={editTaskInfo}
        handleDeleteClick={handleDeleteClick}
      />
    );
  }
}

TodoList.defaultProps = {
  value: '',
  list: [],
};

const mapStateToProps = state => ({
  value: state.todo.value,
  list: state.todo.list,
});

const mapDispatchToProps = dispatch => ({
  /**
   * @description
   * 获取后台 todo 项初始化数据
   * @returns {void}
   */
  initTodoList() {
    dispatch(actionCreators.getInitTodo());
  },

  /**
   * @description
   * 添加 todo 项
   * @param {object} e 事件对象
   * @returns {void}
   */
  handleSubmit(e, that) {
    e.preventDefault();
    const { value } = that.props;
    const item = {
      id: new Date().getTime() + Math.random(),
      done: false,
      info: value,
    };
    dispatch(actionCreators.getAddTodoItem(item));
  },

  /**
   * @description
   * 根据输入的内容改变状态中对应的 value 的值
   * @param {object} e 事件对象
   * @returns {void}
   */
  handleInputChange(e) {
    const { value } = e.target;
    dispatch(actionCreators.getInputChange(value));
  },

  /**
   * @description
   * 移除 todo 项
   * @param {number} index 操作 todo 项的下标
   * @returns {void}
   */
  handleDeleteClick(index) {
    dispatch(actionCreators.getDeleteTodoItem(index));
  },

  /**
   * @description
   * 编辑 todo 项的完成状态
   * @param {number} index 操作项的下标
   * @returns {void}
   */
  toggleTaskStatus(index) {
    dispatch(actionCreators.getToggleTaskStatus(index));
  },

  /**
   * @description
   * 改变 todo 项的描述文案
   * @param {object} e 事件对象
   * @param {number} index 操作项的下标
   */
  editTaskInfo(e, index) {
    const { value } = e.target;
    dispatch(actionCreators.getEditTaskInfo(value, index));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
