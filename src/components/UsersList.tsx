import { FC, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creator/users";

const UsersList: FC = () => {

  const { error, loading, users } = useTypedSelector(state => state.usersPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>{error}...</h1>

  return (
    <div>
      {users.map(user => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            Phone: {user.phone}, Email: {user.email}
          </div>
        )
      })}
    </div>
  )
}

export default UsersList
