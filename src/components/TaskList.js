import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as TaskCreators from '../actions/taskCreators';

const TaskList = props => {
  const {
    taskReducer: { tasks, pagination },
    getAllTasks,
    updateTask,
    deleteTask,
    isFetching,
    error,
  } = props;
  useEffect(() => {
    getAllTasks();
  }, []);
  return (
    <div>
      <h2>Your tasks:</h2>
      {isFetching && 'Loading...'}
      {error && JSON.stringify(error)}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>Task ID: {task.id}</h3>
            <p>{task.body}</p>
            <p>{`${new Date(task.deadline)}`}</p>
            <input
              type='checkbox'
              checked={task.isDone}
              onChange={({ target: { checked } }) => {
                updateTask({
                  id: task.id,
                  values: {
                    isDone: checked,
                  },
                });
              }}
            />
            <button onClick={() => deleteTask(task.id)}>Delete task</button>
          </li>
        ))}
      </ul>
      <div>
        <h4>Pagination info:</h4>
        <p>Current page: {pagination?.currentPage}</p>
        <p>Pages: {pagination?.pagesCount}</p>
        <p>Page size: {pagination?.pageSize}</p>
        <p>Tasks: {pagination?.tasksCount}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getAllTasks: () => dispatch(TaskCreators.getAllTasksRequest()),
  deleteTask: id => dispatch(TaskCreators.deleteTaskRequest(id)),
  updateTask: ({ id, values }) =>
    dispatch(TaskCreators.updateTaskRequest({ id, values })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
