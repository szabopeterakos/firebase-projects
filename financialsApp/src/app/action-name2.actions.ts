import { Action } from '@ngrx/store';

export enum ActionName2ActionTypes {
  LoadActionName2s = '[ActionName2] Load ActionName2s',
  LoadActionName2sSuccess = '[ActionName2] Load ActionName2s Success',
  LoadActionName2sFailure = '[ActionName2] Load ActionName2s Failure',
}

export class LoadActionName2s implements Action {
  readonly type = ActionName2ActionTypes.LoadActionName2s;
}

export class LoadActionName2sSuccess implements Action {
  readonly type = ActionName2ActionTypes.LoadActionName2sSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadActionName2sFailure implements Action {
  readonly type = ActionName2ActionTypes.LoadActionName2sFailure;
  constructor(public payload: { error: any }) { }
}

export type ActionName2Actions = LoadActionName2s | LoadActionName2sSuccess | LoadActionName2sFailure;

