import { CounterActionTypes, CounterAction } from "../actions/counter.actions";

const initialState: number = 0;

export function CounterReducer(
  state: number = initialState,
  action: CounterAction
) {
  console.log("counter", action.type);
  switch (action.type) {
    case CounterActionTypes.INCREASE:
      return (state = ++state);
    case CounterActionTypes.DECREASE:
      return (state = --state);
    default:
      return state;
  }
}
