import { combineReducers } from "redux";

const initialState = {
 value:0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        value:state.value+=1
      };
    case "decrement":
      return {
        value: (state.value -= 1),
      };
    case "incrementBy":
      return {
        value: (state.value += action.payload),
      };
    case "changeColor":
      return {
        ...state,
        color:action.payload
      };
   
    case "resetColor":
      return {
        ...state,
        color:""
      };
   
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
