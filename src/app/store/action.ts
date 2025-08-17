import { createAction, props } from '@ngrx/store';

/**
 * Action for storing the name
 */
export const getNameAction = createAction(
  'NAME ACTION',
  props<{ name: string }>()
);
