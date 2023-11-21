// reducer.ts
import { BUTTON_PRESS } from './types';
import { CalculatorAction, InitialState } from './interfaces';

const initialState: InitialState = {
  screen: "",
  resultScreen: "0"
};

const todoReducer = (state = initialState, action: CalculatorAction): InitialState => {
  switch (action.type) {
    case BUTTON_PRESS:
      return {
        ...state,
        screen: action.payload,
      };
    default:
      return {...state};
  }
};

export default todoReducer;
