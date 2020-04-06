import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeatureName from './feature-name.reducer';

export const selectFeatureNameState = createFeatureSelector<fromFeatureName.State>(
  fromFeatureName.featureNameFeatureKey
);
