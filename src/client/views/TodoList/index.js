import React, { Component } from 'react';
import cloneDeep from 'lodash/cloneDeep';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
      const list = [...provState.list, value];
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
      state,
      handleInputChange,
      handleSubmit,
      toggleTaskStatus,
      editTaskInfo,
      handleDeleteClick,
    } = this;
    const { value, list } = state;

    return (
      <div className="todolist">
        <form className="todo-header" onSubmit={handleSubmit}>
          <label htmlFor="todo">
            <span className="todo-title">ToDoList</span>
            <input
              id="todo"
              name="todo"
              type="text"
              placeholder="Please enter to-do items"
              value={value}
              onChange={handleInputChange}
            />
          </label>
        </form>
        <div className="todo-footer">
          <div className="todo-content">
            <h2>正在进行</h2>
            <ul>
              {list.map((item, index) => {
                if (!item.done) {
                  return (
                    <li
                      className="todo-item"
                      key={item.id}
                    >
                      <input
                        type="checkbox"
                        onClick={() => toggleTaskStatus(index)}
                      />
                      <input
                        type="text"
                        value={item.info}
                        onChange={e => editTaskInfo(e, index)}
                      />
                      <span
                        className="close"
                        onClick={() => handleDeleteClick(index)}
                      />
                    </li>
                  );
                }
                return false;
              })}
            </ul>
            <h2>已经完成</h2>
            <ul>
              {list.map((item, index) => {
                if (item.done) {
                  return (
                    <li
                      className="todo-item done"
                      key={item.id}
                    >
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        onClick={() => toggleTaskStatus(index)}
                      />
                      <input
                        type="text"
                        value={item.info}
                        onChange={e => editTaskInfo(e, index)}
                      />
                      <span
                        className="close"
                        onClick={() => handleDeleteClick(index)}
                      />
                    </li>
                  );
                }
                return false;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
