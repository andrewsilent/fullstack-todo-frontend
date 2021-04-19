import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { bindActionCreators } from 'redux';
import * as TaskCreators from '../actions/taskCreators';
import qs from 'query-string';
import Task from './Task';
import Pagination from './pagination/Pagination';

const TaskList = props => {
  const {
    taskReducer: { tasks, pagination },
    isFetching,
    error,
  } = useSelector(state => state);

  const location = useLocation();
  const [query, setQuery] = useState(qs.parse(location.search));

  const dispatch = useDispatch();

  const {
    getAllTasksRequest,
    getTaskRequest,
    updateTaskRequest,
    deleteTaskRequest,
  } = bindActionCreators(TaskCreators, dispatch);

  useEffect(() => setQuery(qs.parse(location.search)), [location.search]);
  useEffect(() => getAllTasksRequest(query), [query]);

  return (
    <div>
      <h2>Your tasks:</h2>
      {isFetching && 'Loading...'}
      {error && JSON.stringify(error)}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Task task={task} getTaskRequest={getTaskRequest} updateTaskRequest={updateTaskRequest} deleteTaskRequest={deleteTaskRequest} />
          </li>
        ))}
      </ul>
      {pagination && (
        <Pagination tasks={tasks} pagination={pagination} />
      )}
    </div>
  );
};

export default TaskList;
