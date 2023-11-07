import { ADD_TODO, DELETE_TODO } from './types';

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: {
    text: string;
  };
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: {
    id: number;
  };
}

export type TodoAction = AddTodoAction | DeleteTodoAction;

export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: { text },
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload: { id },
});