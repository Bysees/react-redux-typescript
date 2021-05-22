import { ActionUsersTypes, UsersActions, UsersState } from "../types/users"

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null
}

const usersReducer = (state = initialState, action: UsersActions): UsersState => {
  switch (action.type) {

    case ActionUsersTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] }

    case ActionUsersTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload }

    case ActionUsersTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] }

    default:
      return state
  }
}

export default usersReducer;