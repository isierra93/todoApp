import { useEffect, useState } from "react";
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
  
  useEffect(() => {
    let data = getSaveStorage()
    setTodos(data)
  },[])

  const addTodo = (todo: string): void => {
    const updateTodo = [...todos, {
      task: todo,
      id: uuidv4(),
      time: new Date(),
      completed: false,
      isEdiging: false
    }]
    setTodos(updateTodo)
    saveStorage(updateTodo)
  }

  const updateTodo = (todo: string, id: string): void => {
    const updateTodo = todos.map(toDo => toDo.id === id ? { ...toDo, task: todo, isEdiging: !toDo.isEdiging } : toDo)
    setTodos(updateTodo)
    saveStorage(updateTodo)
  }

  const toggleComplete = (id: string): void => {
    const updateTodo = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    setTodos(updateTodo)
    saveStorage(updateTodo)
  }

  const deleteTodo = (id: string): void => {
    const updateTodo = todos.filter(todo => todo.id !== id)
    setTodos(updateTodo)
    saveStorage(updateTodo)
  }

  const editTodo = (id: string): void => {
    const updateTodo = todos.map(todo => todo.id === id ? { ...todo, isEdiging: !todo.isEdiging } : todo)
    setTodos(updateTodo)
    saveStorage(updateTodo)
  }

  const getSaveStorage = () => {
    const data = localStorage.getItem("todoApp")
    if(data == null) return []
    let dataParse = JSON.parse(data)
    return dataParse
  }
  
  const saveStorage = (tasks: { task: string; id: string; time: Date; completed: boolean; isEdiging: boolean; }[]) => {
    localStorage.setItem("todoApp", JSON.stringify(tasks))
  }

  return { addTodo, updateTodo, toggleComplete, deleteTodo, editTodo, todos }
}