import * as fromFeatureName from './feature-name.actions';

describe('loadFeatureNames', () => {
  it('should return an action', () => {
    expect(fromFeatureName.loadFeatureNames().type).toBe('[FeatureName] Load FeatureNames');
  });
});
