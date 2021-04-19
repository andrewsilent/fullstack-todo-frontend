import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Task from '../components/Task';
import * as TaskCreators from '../actions/taskCreators';

const TaskPage = props => {
  const state = useSelector(state => state);
  console.log('state', state);

  const {
    taskReducer: { tasks },
    isFetching,
    error,
  } = useSelector(state => state);

  const dispatch = useDispatch();

  const { updateTaskRequest, deleteTaskRequest } = bindActionCreators(
    TaskCreators,
    dispatch,
  );

  return (
    <>
      <p>single task</p>
      {isFetching && 'Loading...'}
      {error && JSON.stringify(error)}
      <Task
        task={tasks}
        isReadMore={true}
        updateTaskRequest={() => updateTaskRequest()}
        deleteTaskRequest={() => deleteTaskRequest()}
      />
    </>
  );
};

export default TaskPage;
