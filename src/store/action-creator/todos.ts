import { RootState } from './../store';
import { Dispatch } from "react";
import { ITodo, TodosAction, TodosActionTypes } from "../types/todos";
import axios from 'axios';

export const fetchTodos = () => async (dispatch: Dispatch<TodosAction>, getState: () => RootState) => {

  const page = getState().todosPage.page
  const limit = getState().todosPage.limit
  try {
    dispatch({ type: TodosActionTypes.FETCH_TODOS })
    const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos', {
      params: {
        '_page': page,
        '_limit': limit
      }
    })
    dispatch({ type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: TodosActionTypes.FETCH_TODOS_ERROR, payload: 'Произошла ошибка при загрузке' })
  }
}

export const setCurrentPage = (page: number): TodosAction => {
  return {
    type: TodosActionTypes.SET_CURRENT_PAGE,
    page: page
  }
}