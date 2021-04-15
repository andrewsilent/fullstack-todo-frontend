import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as TaskActionCreators from '../actions/taskCreators';

export function * createTaskSaga (action) {
  try {
    const {
      data: {
        data: [task],
      },
    } = yield API.createTask(action.values);
    yield put(TaskActionCreators.createTaskSuccess(task));
  } catch (error) {
    yield put(TaskActionCreators.createTaskError(error));
  }
}

export function * getAllTasksSaga (action) {
  try {
    const { data } = yield API.getAllTasks(action);
    yield put(TaskActionCreators.getAllTasksSuccess(data));
  } catch (error) {
    yield put(TaskActionCreators.getAllTasksError(error));
  }
}

export function * deleteTaskSaga (action) {
  try {
    const response = yield API.deleteTask(action);
    const { data } = response;
    yield put(TaskActionCreators.deleteTaskSuccess(data));
    console.log('response', response);
  } catch (error) {
    yield put(TaskActionCreators.deleteTaskError(error));
  }
}

export function * updateTaskSaga (action) {
  try {
    const { data } = yield API.updateTask(action);
    yield put(TaskActionCreators.updateTaskSuccess(data));
  } catch (error) {
    yield put(TaskActionCreators.updateTaskError(error));
  }
}
