import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { createTaskSaga, getAllTasksSaga, deleteTaskSaga, updateTaskSaga } from './taskSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_ALL_TASKS_REQUEST, getAllTasksSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TASK_REQUEST, deleteTaskSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_TASK_REQUEST, updateTaskSaga);
}

export default rootSaga;
