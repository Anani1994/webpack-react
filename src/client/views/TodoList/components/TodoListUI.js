import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
      changeLanguage,
    } = this.props;
    return (
      <div className="todolist">
        <form className="todo-header" onSubmit={handleSubmit}>
          <label htmlFor="todo">
            <span className="todo-title" onClick={changeLanguage}>
              ToDoList
            </span>
            <input
              id="todo"
              name="todo"
              type="text"
              placeholder="Please enter to-do items"
              required
              value={value}
              autoComplete="off"
              onChange={handleInputChange}
            />
          </label>
        </form>
        <div className="todo-footer">
          <div className="todo-content">
            <FormattedMessage id="doing" tagName="h2" />
            <ul>
              <TransitionGroup>
                {list.map((item, index) => {
                  if (!item.done) {
                    return (
                      <CSSTransition
                        key={item.id}
                        timeout={1000}
                        classNames="fade"
                        unmountOnExit
                      >
                        <TodoItem
                          index={index}
                          item={item}
                          toggleTaskStatus={toggleTaskStatus}
                          editTaskInfo={editTaskInfo}
                          handleDeleteClick={handleDeleteClick}
                        />
                      </CSSTransition>
                    );
                  }
                  return null;
                })}
              </TransitionGroup>
            </ul>
            <FormattedMessage id="done" tagName="h2" />
            <ul>
              <TransitionGroup>
                {list.map((item, index) => {
                  if (item.done) {
                    return (
                      <CSSTransition
                        key={item.id}
                        timeout={1000}
                        classNames="fade"
                        unmountOnExit
                      >
                        <TodoItem
                          index={index}
                          item={item}
                          toggleTaskStatus={toggleTaskStatus}
                          editTaskInfo={editTaskInfo}
                          handleDeleteClick={handleDeleteClick}
                        />
                      </CSSTransition>
                    );
                  }
                  return null;
                })}
              </TransitionGroup>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

TodoListUI.propTypes = {
  value: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      done: PropTypes.bool,
      info: PropTypes.string,
    }),
  ).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toggleTaskStatus: PropTypes.func.isRequired,
  editTaskInfo: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};

export default TodoListUI;
