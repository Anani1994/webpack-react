import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoListUI extends Component {
  shuldComponentUpdate(nextProps) {
    if (nextProps.list === this.list) {
      return false;
    }
    return true;
  }

  render() {
    const {
      value,
      list,
      handleInputChange,
      handleSubmit,
      toggleTaskStatus,
      editTaskInfo,
      handleDeleteClick,
    } = this.props;
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
                    <TodoItem
                      key={item.id}
                      index={index}
                      item={item}
                      toggleTaskStatus={toggleTaskStatus}
                      editTaskInfo={editTaskInfo}
                      handleDeleteClick={handleDeleteClick}
                    />
                  );
                }
                return null;
              })}
            </ul>
            <h2>已经完成</h2>
            <ul>
              {list.map((item, index) => {
                if (item.done) {
                  return (
                    <TodoItem
                      key={item.id}
                      index={index}
                      item={item}
                      toggleTaskStatus={toggleTaskStatus}
                      editTaskInfo={editTaskInfo}
                      handleDeleteClick={handleDeleteClick}
                    />
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoListUI;
