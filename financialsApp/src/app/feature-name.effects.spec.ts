import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FeatureNameEffects } from './feature-name.effects';

describe('FeatureNameEffects', () => {
  let actions$: Observable<any>;
  let effects: FeatureNameEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FeatureNameEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<FeatureNameEffects>(FeatureNameEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
