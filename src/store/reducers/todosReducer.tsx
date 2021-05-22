import { TodosAction, TodosActionTypes, TodosState } from "../types/todos"

const initialState: TodosState = {
  todos: [],
  error: null,
  loading: false,
  limit: 10,
  page: 1
}

const todosReducer = (state = initialState, action: TodosAction): TodosState => {
  switch (action.type) {
    case TodosActionTypes.FETCH_TODOS:
      return { ...state, loading: true }
    case TodosActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload }
    case TodosActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case TodosActionTypes.SET_CURRENT_PAGE:
      return { ...state, page: action.page }
    default:
      return state
  }
}

export default todosReducer