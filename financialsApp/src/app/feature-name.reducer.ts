import { Action, createReducer, on } from '@ngrx/store';
import * as FeatureNameActions from './feature-name.actions';

export const featureNameFeatureKey = 'featureName';

export interface State {

}

export const initialState: State = {

};

const featureNameReducer = createReducer(
  initialState,

  on(FeatureNameActions.loadFeatureNames, state => state),
  on(FeatureNameActions.loadFeatureNamesSuccess, (state, action) => state),
  on(FeatureNameActions.loadFeatureNamesFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return featureNameReducer(state, action);
}
