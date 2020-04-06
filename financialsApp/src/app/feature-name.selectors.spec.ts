import * as fromFeatureName from './feature-name.reducer';
import { selectFeatureNameState } from './feature-name.selectors';

describe('FeatureName Selectors', () => {
  it('should select the feature state', () => {
    const result = selectFeatureNameState({
      [fromFeatureName.featureNameFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
