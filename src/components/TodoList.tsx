import { useEffect } from "react"
import { useAction } from "../hooks/useAction"
import { useTypedSelector } from "../hooks/useTypedSelector"


const TodoList = () => {

  const { page, error, todos, loading } = useTypedSelector(state => state.todosPage)
  const { fetchTodos, setCurrentPage } = useAction()
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodos()
  }, [page])

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>{error}...</h1>

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {pages.map(p => {
          return (
            <div key={p}
              onClick={() => setCurrentPage(p)}
              style={{ padding: 10, color: p === page ? 'red' : 'black', border: "1px solid black" }}>
              {p}
            </div>
          )
        })}
      </div>

      {todos.map(todo => {
        return (
          <div key={todo.id}>
            {todo.id}. Нужно: {todo.title}, выполнено? {todo.complete ? 'да' : 'нет'}
          </div>
        )
      })}
    </div>
  )
}

export default TodoList