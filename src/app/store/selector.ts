import { createFeatureSelector, createSelector } from '@ngrx/store';

/**
 * The below interface will store all the individual bits of information thatwe are storing in the state like name, age etc..
 */
export interface StateInformationInterface {
  name: string;
}
/**
 * createFeatureSelector : this is just for identifiying the selector
 * Here we used the 'selector'  this word should be same as we used in the app.module.ts file StoreModule.forRoot({selector: reducerFunction})
 */
const featureSelector =
  createFeatureSelector<StateInformationInterface>('selector');

/**
 * This is individual selector for name
 */
export const getNameSelector = createSelector(
  featureSelector,
  (state) => state.name
);
