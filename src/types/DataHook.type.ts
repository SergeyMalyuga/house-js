import type {Hooks} from '../constants/consts.ts';

export type DataHookType = typeof  Hooks[keyof typeof Hooks]
