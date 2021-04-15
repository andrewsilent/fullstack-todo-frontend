import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TaskForm from '../components/TaskForm';
import * as ActionCreators from '../actions';
import TaskList from '../components/TaskList';

const Todo = props => {
  const { pageTitle, pageData } = props;
  useEffect(() => pageData(), []);
  return (
    <div>
      <h1>{pageTitle}</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

const mapStateToProps = ({ pageReducer }) => ({ ...pageReducer });
const mapDispatchToProps = dispatch => ({
  pageData: () => dispatch(ActionCreators.taskpageData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
