import ToDo from "./todo.model";

export default class ToDoState {
  todo: Array<ToDo>;
  ToDoError: Error;
}

export const initializeState = (): ToDoState => {
  return { todo: Array<ToDo>(), ToDoError: null };
};
