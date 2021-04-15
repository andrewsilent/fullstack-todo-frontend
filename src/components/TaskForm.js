import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
// import { createTask } from '../actions/taskCreators';
import * as TaskActionCreators from '../actions/taskCreators';

const TaskForm = props => {
  const { createTaskAction } = props;
  const onSubmit = (values, formikBag) => {
    createTaskAction(values);
    formikBag.resetForm();
  };
  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          body: '',
          deadline: '',
          isDone: false,
        }}
      >
        <Form>
          <Field name='body' placeholder='Task description' />
          <Field name='deadline' type='date' />
          <Field type='checkbox' name='isDone' />
          <button type='submit'>Add Task</button>
        </Form>
      </Formik>
    </div>
  );
};

// const mapStateToProps = state => state;

// const mapDispatchToProps = dispatch => ({
//   createTaskAction: values => dispatch(createTask(values)),
// });

const mapDispatchToProps = dispatch => ({
  createTaskAction: values => dispatch(TaskActionCreators.createTaskRequest(values))
})

export default connect(null, mapDispatchToProps)(TaskForm);
