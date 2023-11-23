import { NUMBER_PRESS, OPERATION_PRESS, POINT_PRESS, AC_PRESS, EQUAL_PRESS, CalculatorActions } from './types';
import { InitialState } from '../interfaces';


const initialState: InitialState = {
  screen: "",
  resultScreen: "0"
};

const todoReducer = (state = initialState, action: CalculatorActions): InitialState => {
  switch (action.type) {
    case NUMBER_PRESS:
      return {
        ...state,
        screen: state.screen + action.payload,
      };
    case OPERATION_PRESS:
      return{
        ...state,
        resultScreen: action.payload
      }
    case POINT_PRESS:
      return{
        ...state,
        resultScreen: "POINT"
      }
    case AC_PRESS:
      return{
        ...state,
        resultScreen: "AC"
      }
    case EQUAL_PRESS:
      return{
        ...state,
        resultScreen: "EQUAL"
      }
    default:
      return {...state};
  }
};

export default todoReducer;