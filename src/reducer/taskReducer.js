import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ACTION_TYPES.CREATE_TASK: {
    //   const { tasks } = state;
    //   const { values } = action;
    //   return {
    //     ...state,
    //     tasks: [...tasks, { ...values }],
    //   };
    // }
    // case ACTION_TYPES.UPDATE_TASK: {
    //   const { id, values } = action;
    //   const { tasks } = state;
    //   const newTasks = [...tasks];
    //   const updatedTask = { ...newTasks[id], ...values };
    //   newTasks[id] = updatedTask;
    //   return {
    //     ...state,
    //     tasks: newTasks,
    //   };
    // }
    // case ACTION_TYPES.DELETE_TASK: {
    //   const { id } = action;
    //   const { tasks } = state;
    //   const newTasks = tasks.filter(task => task.id !== id);
    //   return {
    //     ...state,
    //     tasks: newTasks,
    //   };
    // }

    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      // const { values } = action;
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { values: task } = action;
      return {
        ...state,
        isFetching: false,
        error: null,
        tasks: [...state.tasks, task],
      };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case ACTION_TYPES.GET_ALL_TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_ALL_TASKS_SUCCESS: {
      const {
        values: { data: newTasks, ...rest },
      } = action;
      const { tasks } = state;
      const pagination = { ...rest };
      return {
        ...state,
        tasks: [...tasks, ...newTasks],
        isFetching: true,
        pagination,
      };
    }
    case ACTION_TYPES.GET_ALL_TASKS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case ACTION_TYPES.DELETE_TASK_REQUEST: {
      console.log('action', action);
      return {
        ...state,
        isFetching: true,
      };
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

    default:
      return state;
  }
};

export default taskReducer;
