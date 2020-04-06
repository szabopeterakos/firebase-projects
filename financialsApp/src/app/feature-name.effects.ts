import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as FeatureNameActions from './feature-name.actions';



@Injectable()
export class FeatureNameEffects {

  loadFeatureNames$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(FeatureNameActions.loadFeatureNames),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => FeatureNameActions.loadFeatureNamesSuccess({ data })),
          catchError(error => of(FeatureNameActions.loadFeatureNamesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
