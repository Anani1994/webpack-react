import React from 'react';

const TodoItem = (props) => {
  const {
    index,
    item,
    toggleTaskStatus,
    editTaskInfo,
    handleDeleteClick,
  } = props;
  const { done } = item;
  return (
    <li className={done ? 'todo-item done' : 'todo-item'}>
      <input
        type="checkbox"
        defaultChecked={done}
        readOnly={done}
        onClick={() => toggleTaskStatus(index)}
      />
      <input
        type="text"
        value={item.info}
        onChange={e => editTaskInfo(e, index)}
      />
      <span className="close" onClick={() => handleDeleteClick(index)} />
    </li>
  );
};

export default TodoItem;
