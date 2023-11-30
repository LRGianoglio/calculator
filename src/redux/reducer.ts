import { NUMBER_PRESS, OPERATION_PRESS, POINT_PRESS, AC_PRESS, EQUAL_PRESS, CalculatorActions } from './types';
import { InitialState } from '../interfaces';


const initialState: InitialState = {
  screen: "",
  resultScreen: "0"
};

const todoReducer = (state = initialState, action: CalculatorActions): InitialState => {
  switch (action.type) {
    case NUMBER_PRESS:
      if (action.payload === "0" && state.screen==="0") return {...state}
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
      const arrayedfiedOperation: string[] = state.screen.split(/([+\-x/])/).filter(token => token.trim() !== '');
      let endResult:number | string = 666;
      if (arrayedfiedOperation.length === 1) {
        endResult = parseFloat(arrayedfiedOperation[0]) + 0
      } else {
        for (let i:number = 0; i<arrayedfiedOperation.length; i++){

        }
      };
      
      return{
        ...state,
        resultScreen: endResult.toString()
      }
    default:
      return {...state};
  }
};

export default todoReducer;