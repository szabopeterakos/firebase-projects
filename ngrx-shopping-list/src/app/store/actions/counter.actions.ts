import { Action } from "@ngrx/store";

export enum CounterActionTypes {
  INCREASE = "[SHOPPING] Increase counter",
  DECREASE = "[SHOPPING] Decrease counter",
}

export class IncreaseCounterAction implements Action {
  readonly type = CounterActionTypes.INCREASE;
  constructor(public payload: string) {}
}

export class DecreaseCounterAction implements Action {
  readonly type = CounterActionTypes.DECREASE;
  constructor(public payload: string) {}
}

export type CounterAction = DecreaseCounterAction | IncreaseCounterAction;
