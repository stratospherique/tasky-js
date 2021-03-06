import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { TasksDiv } from '../styled/containers';
import { Heading } from '../styled/styledParts';
import TaskCheck from '../taskCheck';

const EMAIL = 'ahmed.mahfoudh1991@gmail.com';

const Tasks = props => {
  const [taskList, setTaskList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    axios.get(`/tasks?candidate_email=${EMAIL}&checked=false`,
      { withCredentials: true })
      .then((resp) => {
        setTaskList(resp.data.tasks);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!props.isVisible) fetchData();
  }, [props.isVisible]);
  return (
    <TasksDiv>
      <Heading
        type="primary"
        color="#777A87">
        Feeling Tasky
      </Heading>
      {isLoading ? <span>Loading...</span> :
        (
          <>
            <Heading 
              type="secondary"
              color="#777A87">
              It&apos;s time to clear some of those tasks !! Don&apos;t you think ?
            </Heading>
            <Heading
              color="#9D76F0">
              {`${taskList.length} Tasks are waiting`}
            </Heading>
            <ul>
              {taskList.length > 0
                ? taskList.map(ele => (
                  <TaskCheck
                    key={ele._id}
                    labelTag={ele.label}
                    taskID={ele._id}
                    status={ele.status}
                  />
                ))
                : <li>No todo tasks!!</li>}
            </ul>
          </>
        )}
    </TasksDiv>
  );
};

const mapStateToProps = state => ({
  isVisible: state.formVisible,
});

export default connect(mapStateToProps, null)(Tasks);
