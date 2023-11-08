import { BUTTON_PRESS } from "./types";

export interface InitialState{
    screen: string;
}

export type CalculatorAction = SetScreen;

export interface SetScreen{
    type: typeof BUTTON_PRESS;
    payload: string;
}