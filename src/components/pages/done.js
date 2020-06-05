import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {DoneDiv} from '../styled/containers';
import TaskCheck from '../taskCheck';

const EMAIL = 'ahmed.mahfoudh1991@gmail.com';

const Done = () => {
    const [taskList, setTaskList] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        axios.get(`/tasks?candidate_email=${EMAIL}&checked=true`,
        { withCredentials: true })
        .then((resp) => {
            setTaskList(resp.data.tasks);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    return (
        <DoneDiv>
            <h2>Completed Tasks</h2>
            {isLoading ? <span>Loading...</span> :
            <ul>
                {taskList.length > 0 ?
                taskList.map((ele, index) => <TaskCheck key={ele._id} labelTag={ele.label} taskID={ele._id} status={ele.isDone} />) :
                <li>No Completed tasks!!</li>}
            </ul>
             }
        </DoneDiv>
    );
};

export default Done;