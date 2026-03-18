import { BUTTON_TYPE } from '../constants/consts.ts';

export type ButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];
