import { combineReducers } from 'redux';

const INITIAL_STATE = {
  daysIn: null,
  daysOut: null,
  firstDate: null
};

const Reducer= (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RECEIVE_DAYS_IN':
        state.daysIn = action.payload;
        return state;
    case 'RECEIVE_DAYS_OUT':
        state.daysOut = action.payload;
        return state;
    case 'RECEIVE_FIRST_DATE':
        // const temp = JSON.stringify(action.payload).slice(1,11);
        state.firstDate = action.payload;
        return state;    
    default:
      return state
  }
};

export default combineReducers({
  reducer: Reducer
});

