import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as TaskActionCreators from '../actions/taskCreators';

export function * createTaskSaga (action) {
  try {
    const {
      data: { data },
    } = yield API.createTask(action.payload);
    yield put(TaskActionCreators.createTaskSuccess(data));
  } catch (error) {
    yield put(TaskActionCreators.createTaskError(error));
  }
}

export function * getAllTasksSaga (action) {
  try {
    const { data } = yield API.getAllTasks(action.payload);
    yield put(TaskActionCreators.getAllTasksSuccess(data));
  } catch (error) {
    yield put(TaskActionCreators.getAllTasksError(error));
  }
}

export function * getTaskSaga (action) {
  try {
    console.log('action.payload in saga', action.payload);
    const {
      data: { data },
    } = yield API.getTask(action.payload);
    console.log('data in saga', data);
    yield put(TaskActionCreators.getTaskRequest(data));
  } catch (error) {
    yield put(TaskActionCreators.getTaskError(error));
  }
}

export function * deleteTaskSaga (action) {
  try {
    const { data } = yield API.deleteTask(action.payload);
    yield put(TaskActionCreators.deleteTaskSuccess(data));
  } catch (error) {
    yield put(TaskActionCreators.deleteTaskError(error));
  }
}

export function * updateTaskSaga (action) {
  try {
    const { data } = yield API.updateTask(action.payload);
    yield put(TaskActionCreators.updateTaskSuccess(data));
  } catch (error) {
    yield put(TaskActionCreators.updateTaskError(error));
  }
}
