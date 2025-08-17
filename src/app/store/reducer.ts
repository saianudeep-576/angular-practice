import { createReducer, on } from '@ngrx/store';
import { getNameAction } from './action';

const initialState = {
  name: '',
};

/**
 * One common reducer function for all the actions in the application
 * This reducer function will be used as selector in the app.module.ts file
 */
export const reducerFunction = createReducer(
  initialState,
  on(getNameAction, (state, { name }) => {
    return {
      ...state,
      name: name,
    };
  })
);
