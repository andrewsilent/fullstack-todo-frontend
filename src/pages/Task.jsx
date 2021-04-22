import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Task from '../components/Task';
import * as TaskCreators from '../actions/taskCreators';
import { useParams } from 'react-router';

const TaskPage = props => {
  const { taskId } = useParams();
  console.log('taskId from params', taskId);

  const {
    taskReducer: { tasks },
    isFetching,
    error,
  } = useSelector(state => state);

  const dispatch = useDispatch();

  const {
    getTaskRequest,
    updateTaskRequest,
    deleteTaskRequest,
  } = bindActionCreators(TaskCreators, dispatch);

  useEffect(() => {
    getTaskRequest(taskId);
  }, []);

  return (
    <>
      <p>single task</p>
      {isFetching && 'Loading...'}
      {error && JSON.stringify(error)}
      <Task
        task={tasks}
        isReadMore={true}
        getTaskRequest={() => getTaskRequest()}
        updateTaskRequest={() => updateTaskRequest()}
        deleteTaskRequest={() => deleteTaskRequest()}
      />
    </>
  );
};

export default TaskPage;
