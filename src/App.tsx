import './App.css';
import TodoList from './components/TodoList';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <UsersList />
      <TodoList />
    </div>
  );
}

export default App;
