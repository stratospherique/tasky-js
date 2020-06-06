import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DoneDiv } from '../styled/containers';
import { Heading } from '../styled/styledParts';
import TaskCheck from '../taskCheck';

const EMAIL = 'ahmed.mahfoudh1991@gmail.com';

const Done = () => {
  const [taskList, setTaskList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`/tasks?candidate_email=${EMAIL}&checked=true`,
      { withCredentials: true })
      .then(resp => {
        setTaskList(resp.data.tasks);
        setIsLoading(false);
      });
  }, []);

  return (
    <DoneDiv>
      <Heading 
        type="primary"
        color="#777A87"
      >
        Yey !! we’re rockin’
      </Heading>
      {isLoading ? <span>Loading...</span> :
        (
          <>
            <Heading
              type="secondary"
              color="#777A87">
              We did one hell of a job right there !! Bravo six, going dark.
            </Heading>
            <Heading
              color="#9D76F0">
              {`${taskList.length} Tasks are crushed`}
            </Heading>
            <ul>
              {taskList.length > 0
                ? taskList.map(ele => (
                  <TaskCheck
                    key={ele._id}
                    labelTag={ele.label}
                    taskID={ele._id}
                    status={ele.isDone}
                  />
                ))
                : <li>No Completed tasks!!</li>}
            </ul>
          </>
        )}
    </DoneDiv>
  );
};

export default Done;
