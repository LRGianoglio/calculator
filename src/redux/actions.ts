import { NUMBER_PRESS, OPERATION_PRESS, POINT_PRESS, AC_PRESS, EQUAL_PRESS } from './types';

export const numberPress = (payload: string) => {
  return {
    type: NUMBER_PRESS,
    payload,
  };
};

export const operationPress = (payload: string) => {
  return {
    type: OPERATION_PRESS,
    payload,
  };
};

export const pointPress = () => {
  return {
    type: POINT_PRESS,
  };
};

export const acPress = () => {
  return {
    type: AC_PRESS,
  };
};

export const equalPress = () => {
  return {
    type: EQUAL_PRESS,
  };
};
