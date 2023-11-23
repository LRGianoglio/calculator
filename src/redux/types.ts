export const NUMBER_PRESS = 'NUMBER_PRESS';
export const OPERATION_PRESS = 'OPERATION_PRESS';
export const POINT_PRESS = 'POINT_PRESS';
export const AC_PRESS = 'AC_PRESS';
export const EQUAL_PRESS = 'EQUAL_PRESS';

export interface NumberPressAction {
  type: typeof NUMBER_PRESS;
  payload: string;
}

export interface OperationPressAction {
  type: typeof OPERATION_PRESS;
  payload: string;
}

export interface PointPressAction {
  type: typeof POINT_PRESS;
}

export interface ACPressAction {
  type: typeof AC_PRESS;
}

export interface EqualPressAction {
  type: typeof EQUAL_PRESS;
}

export type CalculatorActions = NumberPressAction | OperationPressAction | PointPressAction | ACPressAction | EqualPressAction;