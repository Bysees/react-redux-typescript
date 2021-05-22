export enum ActionUsersTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUsers {
  type: ActionUsersTypes.FETCH_USERS
}

interface FetchUsersSuccess {
  type: ActionUsersTypes.FETCH_USERS_SUCCESS
  payload: IUser[]
}

interface FetchUsersError {
  type: ActionUsersTypes.FETCH_USERS_ERROR
  payload: string
}

export type UsersActions = FetchUsers | FetchUsersSuccess | FetchUsersError

export interface IUser {
  id: number
  name: string
  email: string
  phone: string
}

export interface UsersState {
  users: IUser[],
  loading: boolean
  error: null | string
}

