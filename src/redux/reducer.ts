import { NUMBER_PRESS, OPERATION_PRESS, POINT_PRESS, AC_PRESS, EQUAL_PRESS, CalculatorActions } from './types';
import { InitialState } from '../interfaces';

const initialState: InitialState = {
  screen: "",
  resultScreen: "0",
  reset: false
};

const calculatorReducer = (state = initialState, action: CalculatorActions): InitialState => {
  switch (action.type) {
    case NUMBER_PRESS:
      if (state.screen === "0" || state.reset) {
        return { ...state, screen: action.payload, reset: false };
      }
      return {
        ...state,
        screen: state.screen + action.payload,
      };
      case OPERATION_PRESS:
        return {
          ...state,
          screen: state.screen + action.payload,
          reset: false,
        };
        case POINT_PRESS:
          const lastOperand = state.screen.split(/([+\-x/])/).pop();
          if (!lastOperand?.includes('.')) {
            return {
              ...state,
              screen: state.screen + '.',
              reset: false,
            };
          }
          return state;
    case AC_PRESS:
      return {
        ...initialState,
      };
    case EQUAL_PRESS:
      const arrayedfiedOperation: string[] = state.screen.split(/([+\-x/])/).filter(token => token.trim() !== '');
      let endResult: number | string = 0;

      if (arrayedfiedOperation.length === 1) {
        endResult = parseFloat(arrayedfiedOperation[0]);
      } else {
        let operator = '+';
        let midResult: number = 0;

        for (let i: number = 0; i < arrayedfiedOperation.length; i++) {
          const token = arrayedfiedOperation[i];

          if (['+', '-', 'x', '/'].includes(token)) {
            operator = token;
          } else {
            const num = parseFloat(token);

            switch (operator) {
              case '+':
                midResult += num;
                break;
              case '-':
                midResult -= num;
                break;
              case 'x':
                midResult *= num;
                break;
              case '/':
                midResult /= num;
                break;
              default:
                break;
            }
          }
        }

        endResult = midResult;
      }

      return {
        ...state,
        resultScreen: endResult.toString(),
        reset: true,
      };
    default:
      return { ...state };
  }
};

export default calculatorReducer;