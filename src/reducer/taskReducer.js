import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  tasks: [],
};

const requestActionTemplate = (state, action) => {
  return {
    ...state,
    isFetching: true,
  };
};

const errorActionTemplate = (state, action) => {
  const {
    payload: { error },
  } = action;
  return {
    ...state,
    isFetching: false,
    error,
  };
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    // CREATE_TASK
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return requestActionTemplate(state, action);
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const {
        payload: { data: task },
      } = action;
      return {
        ...state,
        isFetching: false,
        error: null,
        tasks: [...state.tasks, task],
      };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const {
        payload: {
          error: { message },
        },
      } = action;
      return {
        ...state,
        isFetching: false,
        error: message,
      };
    }

    // GET ALL TASKS
    case ACTION_TYPES.GET_ALL_TASKS_REQUEST: {
      return requestActionTemplate(state, action);
    }
    case ACTION_TYPES.GET_ALL_TASKS_SUCCESS: {
      const {
        payload: { data: tasks, pagination },
      } = action;
      return {
        ...state,
        tasks: [...tasks],
        isFetching: false,
        pagination,
      };
    }
    case ACTION_TYPES.GET_ALL_TASKS_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    // GET TASK
    case ACTION_TYPES.GET_TASK_REQUEST: {
      return requestActionTemplate(state, action);
    }
    case ACTION_TYPES.GET_TASK_SUCCESS: {
      const { tasks } = state;
      const {
        payload: { data: newTasks },
      } = action;
      return {
        ...state,
        tasks: [...newTasks],
        isFetching: false,
      };
    }
    case ACTION_TYPES.GET_TASK_ERROR: {
      return errorActionTemplate(state, action);
    }

    // DELETE TASK
    case ACTION_TYPES.DELETE_TASK_REQUEST: {
      return requestActionTemplate(state, action);
    }
    case ACTION_TYPES.DELETE_TASK_SUCCESS: {
      const { tasks } = state;
      const {
        payload: { message },
      } = action;
      return {
        ...state,
        tasks: [...tasks],
        message: message,
        error: null,
        isFetching: false,
      };
    }
    case ACTION_TYPES.DELETE_TASK_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    // UPDATE TASK
    case ACTION_TYPES.UPDATE_TASK_REQUEST: {
      return requestActionTemplate(state, action);
    }
    case ACTION_TYPES.UPDATE_TASK_SUCCESS: {
      const { tasks } = state;
      const {
        payload: { data: newTask },
      } = action;
      const newTasks = tasks.map(task =>
        task.id === newTask.id ? newTask : task,
      );
      return {
        ...state,
        tasks: newTasks,
        isFetching: false,
        error: null,
      };
    }
    case ACTION_TYPES.UPDATE_TASK_ERROR: {
      return errorActionTemplate(state, action);
    }

    default:
      return state;
  }
};

export default taskReducer;
