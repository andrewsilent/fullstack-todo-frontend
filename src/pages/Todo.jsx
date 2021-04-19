import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Todo = props => {
  return (
    <div>
      <h1>Task list</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Todo;
