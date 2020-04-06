import { createAction, props } from '@ngrx/store';

export const loadActionNames = createAction(
  '[ActionName] Load ActionNames'
);

export const loadActionNamesSuccess = createAction(
  '[ActionName] Load ActionNames Success',
  props<{ data: any }>()
);

export const loadActionNamesFailure = createAction(
  '[ActionName] Load ActionNames Failure',
  props<{ error: any }>()
);
