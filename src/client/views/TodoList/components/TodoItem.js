import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';

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
      {/* <FormattedMessage id={item.info}>
        {txt => (
          <input
            type="text"
            value={txt}
            onChange={e => editTaskInfo(e, index)}
          />
        )}
      </FormattedMessage> */}
      <span className="close" onClick={() => handleDeleteClick(index)} />
    </li>
  );
};

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  toggleTaskStatus: PropTypes.func.isRequired,
  editTaskInfo: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default TodoItem;
