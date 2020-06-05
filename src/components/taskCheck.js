import React, { useState } from 'react';
import axios from 'axios';

const TaskCheck = ({labelTag, taskID, status}) => {

    const [isChecked, setIsChecked] = useState(!!status);

    const handleClick = (e) => {
        setIsChecked(!isChecked);
        axios.patch(`/check_task/${taskID}`)
        .catch((err) => {
            setIsChecked(e.target.checked);
        })
    }

    return (
        <li>
            <label htmlFor={taskID} style={isChecked ? {textDecoration: 'line-through'} : null}>
                {labelTag}
            </label>
            <input type="checkbox" id={taskID} name={labelTag} checked={isChecked} onChange={handleClick} />
        </li>
    )
}

export default TaskCheck;