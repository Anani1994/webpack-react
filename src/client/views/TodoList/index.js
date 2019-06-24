import cloneDeep from 'lodash/cloneDeep';
import React, { Component } from 'react';
import TodoListUI from './components/TodoListUI';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.id = 3;
    this.state = {
      value: '',
      // eslint-disable-next-line
      list: [
        { id: 1, done: false, info: 'learn python' },
        { id: 2, done: true, info: 'learn javascript' },
        { id: 3, done: false, info: 'learn java' },
      ],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.editTaskInfo = this.editTaskInfo.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleInputChange(e) {
    const { value } = e.target;
    this.setState(() => ({
      value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { value } = this.state;
    this.setState((provState) => {
      const item = {
        id: (this.id += 1),
        done: false,
        info: value,
      };
      const list = [...provState.list, item];
      return { value: '', list };
    });
  }

  toggleTaskStatus(index) {
    this.setState((provState) => {
      const list = cloneDeep(provState.list);
      list[index].done = !list[index].done;
      return { list };
    });
  }

  handleDeleteClick(index) {
    this.setState((provState) => {
      const list = cloneDeep(provState.list);
      list.splice(index, 1);
      return { list };
    });
  }

  editTaskInfo(e, index) {
    const { value } = e.target;
    this.setState((provState) => {
      const list = cloneDeep(provState.list);
      list[index].info = value;
      return { list };
    });
  }

  render() {
    const {
      state: { value, list },
      handleInputChange,
      handleSubmit,
      toggleTaskStatus,
      editTaskInfo,
      handleDeleteClick,
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
