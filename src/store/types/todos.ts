export interface ITodo {
  id: number
  title: string
  complete: boolean
}

export interface TodosState {
  todos: ITodo[]
  loading: boolean
  error: null | string
  limit: number
  page: number
}

export enum TodosActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
}

interface FetchTodo {
  type: TodosActionTypes.FETCH_TODOS
}

interface FetchTodoSuccess {
  type: TodosActionTypes.FETCH_TODOS_SUCCESS
  payload: ITodo[]
}

interface FetchTodoError {
  type: TodosActionTypes.FETCH_TODOS_ERROR
  payload: string
}

interface SetCurrentPage {
  type: TodosActionTypes.SET_CURRENT_PAGE
  page: number
}

export type TodosAction = FetchTodo | FetchTodoSuccess | FetchTodoError | SetCurrentPage