import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import * as TaskSagas from './taskSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, TaskSagas.createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_ALL_TASKS_REQUEST, TaskSagas.getAllTasksSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TASK_REQUEST, TaskSagas.deleteTaskSaga);
}

export default rootSaga;
