import ACTION_TYPES from './actionTypes';

// BASIC
// export const createTask = values => ({
//   type: ACTION_TYPES.CREATE_TASK,
//   values,
// });
// export const getAllTasks = () => ({
//   type: ACTION_TYPES.GET_ALL_TASKS,
// });
// export const getTask = id => ({
//   type: ACTION_TYPES.GET_TASK,
//   id,
// });
// export const updateTask = ({ id, values }) => ({
//   type: ACTION_TYPES.UPDATE_TASK,
//   id,
//   values,
// });
// export const deleteTask = id => ({
//   type: ACTION_TYPES.DELETE_TASK,
//   id,
// });

//ADVANCED
export const createTaskRequest = values => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
  values,
});
export const createTaskSuccess = values => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  values,
});
export const createTaskError = error => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error,
});

export const getAllTasksRequest = values => ({
  type: ACTION_TYPES.GET_ALL_TASKS_REQUEST,
  values,
});
export const getAllTasksSuccess = values => ({
  type: ACTION_TYPES.GET_ALL_TASKS_SUCCESS,
  values,
});
export const getAllTasksError = error => ({
  type: ACTION_TYPES.GET_ALL_TASKS_ERROR,
  error,
});

export const deleteTaskRequest = id => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
  id,
});
export const deleteTaskSuccess = values => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  values,
});
export const deleteTaskError = error => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  error,
});

export const updateTaskRequest = ({ id, values }) => ({
  type: ACTION_TYPES.UPDATE_TASK_REQUEST,
  id,
  values,
});
export const updateTaskSuccess = values => ({
  type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
  values,
});
export const updateTaskError = error => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  error,
});
