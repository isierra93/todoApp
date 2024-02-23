import { useState } from "react";
import { v4 as uuidv4 } from "uuid"

export function useTodoWrapper() {
  const [todos, setTodos] = useState<Array<{
    task: string,
    id: string,
    time: Date,
    completed: boolean,
    isEdiging: boolean
  }>>
    ([])

  const addTodo = (todo: string): void => {
    setTodos([...todos, {
      task: todo,
      id: uuidv4(),
      time: new Date(),
      completed: false,
      isEdiging: false
    }])
  }

  const updateTodo = (todo: string, id: string): void => {
    setTodos(todos.map(toDo => toDo.id === id ? { ...toDo, task: todo, isEdiging: !toDo.isEdiging } : toDo))
  }

  const toggleComplete = (id: string): void => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const deleteTodo = (id: string): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id: string): void => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEdiging: !todo.isEdiging } : todo))
  }

  return { addTodo, updateTodo, toggleComplete, deleteTodo, editTodo , todos }
}