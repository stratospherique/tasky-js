import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { TasksDiv } from '../styled/containers';
import TaskCheck from '../taskCheck';

const EMAIL = 'ahmed.mahfoudh1991@gmail.com';

const Tasks = (props) => {
    
    const [taskList, setTaskList] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        setIsLoading(true);
        axios.get(`/tasks?candidate_email=${EMAIL}&checked=false`,
        { withCredentials: true })
        .then((resp) => {
            setTaskList(resp.data.tasks)
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        if (!props.isVisible) fetchData();
    }, [props.isVisible])
    
    return (
        <TasksDiv>
            <h2>Uncompleted Tasks</h2>
            {isLoading ? <span>Loading...</span> :
            <ul>
                {taskList.length > 0 ?
                taskList.map((ele, index) => <TaskCheck key={ele._id} labelTag={ele.label} taskID={ele._id} status={ele.status} />) :
                <li>No todo tasks!!</li>}
            </ul>
             }
        </TasksDiv>
    );
}

const mapStateToProps = (state) => ({
    isVisible: state.formVisible
})

export default connect(mapStateToProps, null)(Tasks);
