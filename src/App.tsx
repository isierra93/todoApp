import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  type Todo = string
  type Title = string

  const [title, setTitle] = useState<Title>('')
  const [todos, setTodos] = useState<Todo[]>([])


  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    console.log(title);
    setTodos([...todos,title])
  }

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">
          <input
            type="text"
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <button type='submit'>
          Agregar
        </button>
      </form>

      <ul>
        {todos.map(todo => {
          return <li>{todo}</li>
        })}
      </ul>
    </>
  )
}

export default App
