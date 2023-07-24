import { createAction, props } from '@ngrx/store';

export const increament = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const reset = createAction('RESET');
export const customIncrement = createAction(
  'CUSTOM',
  props<{ value: number }>()
);
