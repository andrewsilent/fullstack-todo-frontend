import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  welcome: 'Welcome message! Greetings, you are right now right here',
  pageTitle: 'This is Page Title',
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.HOMEPAGE: {
      return {
        ...state,
        pageTitle: 'Home Page',
      };
    }
    case ACTION_TYPES.TASKPAGE: {
      return {
        ...state,
        pageTitle: 'Tasks',
      };
    }
    default:
      return state;
  }
};

export default pageReducer;
