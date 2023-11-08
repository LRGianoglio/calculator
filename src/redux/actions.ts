import { SetScreen } from './interfaces';
import { BUTTON_PRESS } from './types';

export const SetScreenText = (text: string): SetScreen => ({
  type: BUTTON_PRESS,
  payload: text,
});