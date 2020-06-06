import React, { useState } from 'react';
import axios from 'axios';

const TaskCheck = ({labelTag, taskID, status}) => {

  const [isChecked, setIsChecked] = useState(!!status);

  const handleClick = (e) => {
    setIsChecked(!isChecked);
    axios.patch(`/check_task/${taskID}`)
      .catch(err => {
        setIsChecked(e.target.checked);
      });
  };

  return (
    <li>
      <label
        className="container" 
        style={isChecked ? {textDecoration: 'line-through'} : null}>
        {labelTag}
        <input type="checkbox" checked={isChecked} onChange={handleClick} />
        <span className="checkmark"></span>
      </label>
    </li>
  );
};

export default TaskCheck;
