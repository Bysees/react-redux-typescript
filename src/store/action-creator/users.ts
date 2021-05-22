import { ActionUsersTypes, UsersActions, IUser } from './../types/users';
import { Dispatch } from "react";
import axios from 'axios';

export const fetchUsers = () => async (dispatch: Dispatch<UsersActions>) => {
  try {
    dispatch({ type: ActionUsersTypes.FETCH_USERS })
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    dispatch({ type: ActionUsersTypes.FETCH_USERS_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: ActionUsersTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке данных' })
  }
}