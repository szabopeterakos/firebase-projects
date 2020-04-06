import { Action, createReducer, on } from "@ngrx/store";
import * as ToDoActions from "./todo.action";
import ToDo from "./todo.model";
import ToDoState, { initializeState } from "./todo.state";

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(ToDoActions.GetToDoAction, state => state),
  on(ToDoActions.CreateToDoAction, (state: ToDoState, todo: ToDo) => {
    return { ...state, todo: [...state.todo, todo], ToDoError: null };
  }),
  on(ToDoActions.SuccessGetToDoAction, (state: ToDoState, { payload }) => {
    return { ...state, todo: payload };
  }),
  on(ToDoActions.SuccessCreateToDoAction, (state: ToDoState, { payload }) => {
    return { ...state, todo: [...state.todo, payload], ToDoError: null };
  }),
  on(ToDoActions.ErrorToDoAction, (state: ToDoState, error: Error) => {
    console.log(error);
    return { ...state, ToDoError: error };
  })
);

export function ToDoReducer(state: ToDoState | undefined, action: Action) {
  return reducer(state, action);
}
