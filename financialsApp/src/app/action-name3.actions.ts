import { Action } from '@ngrx/store';

export enum ActionName3ActionTypes {
  LoadActionName3s = '[ActionName3] Load ActionName3s',
  
  
}

export class LoadActionName3s implements Action {
  readonly type = ActionName3ActionTypes.LoadActionName3s;
}


export type ActionName3Actions = LoadActionName3s;
