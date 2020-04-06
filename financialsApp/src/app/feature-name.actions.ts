import { createAction, props } from '@ngrx/store';

export const loadFeatureNames = createAction(
  '[FeatureName] Load FeatureNames'
);

export const loadFeatureNamesSuccess = createAction(
  '[FeatureName] Load FeatureNames Success',
  props<{ data: any }>()
);

export const loadFeatureNamesFailure = createAction(
  '[FeatureName] Load FeatureNames Failure',
  props<{ error: any }>()
);
