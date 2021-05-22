import { combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from './reducers/todosReducer';
import usersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({
  usersPage: usersReducer,
  todosPage: todosReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))