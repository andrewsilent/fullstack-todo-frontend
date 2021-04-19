import ACTION_TYPES from './actionTypes';

export const createTaskRequest = data => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
  payload: { data },
});
export const createTaskSuccess = data => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  payload: { data },
});
export const createTaskError = error => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  payload: { error },
});

export const getAllTasksRequest = (options = {}) => ({
  type: ACTION_TYPES.GET_ALL_TASKS_REQUEST,
  payload: { ...options },
});
export const getAllTasksSuccess = values => ({
  type: ACTION_TYPES.GET_ALL_TASKS_SUCCESS,
  payload: { ...values },
});
export const getAllTasksError = error => ({
  type: ACTION_TYPES.GET_ALL_TASKS_ERROR,
  payload: { error },
});

export const getTaskRequest = taskId => ({
  type: ACTION_TYPES.GET_TASK_REQUEST,
  payload: { taskId },
});
export const getTaskSuccess = values => ({
  type: ACTION_TYPES.GET_TASK_SUCCESS,
  payload: { ...values },
});
export const getTaskError = error => ({
  type: ACTION_TYPES.GET_TASK_ERROR,
  payload: { error },
});

export const deleteTaskRequest = taskId => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
  payload: { taskId },
});
export const deleteTaskSuccess = values => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  payload: { ...values },
});
export const deleteTaskError = error => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  payload: { error },
});

export const updateTaskRequest = ({ taskId, values }) => ({
  type: ACTION_TYPES.UPDATE_TASK_REQUEST,
  payload: { taskId, values },
});
export const updateTaskSuccess = values => ({
  type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
  payload: { ...values },
});
export const updateTaskError = error => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  payload: { error },
});
