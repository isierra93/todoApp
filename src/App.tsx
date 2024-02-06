import { useState } from 'react';
import { MdDelete, MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { ListOfTodos } from './components/ListOfTodos.tsx';
import reactLogo from './assets/react.svg'

import './App.css'

function App() {

  const [title, setTitle] = useState<string>('')
  const [todos, setTodos] = useState<Array<{ title: string, time: Date, status: string }>>([])
  const [selectedToDo, setSelectedToDo] = useState('all')

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    //Si esta vacio no guarda nada
    let titleInput: string = title.trim()
    if (titleInput === '') {
      setTitle('')
      return
    }
    //Else, crea un objeto con el title del input, status incomplete por default y la date del momento de creacion
    let toDo = {
      title: titleInput,
      time: new Date(),
      status: 'incomplete'
    }

    //Guarda la nueva tarea en el array y vacia el state title para un nuevo input
    setTodos([...todos, toDo])
    setTitle('')
  }

  function handleCheck(i: number) {
    //Recibe el index y cambia el status de la task
    let task = todos
    if (task[i].status === 'incomplete') {
      task[i].status = 'complete'
    } else {
      task[i].status = 'incomplete'
    }
    setTodos([...task])
  }

  function handleDelete(i: number) {
    //Recibe el index y elimina del array esa posicion
    let task = todos
    task.splice(i, 1)
    setTodos([...task])
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
            required
          />
        </label>
        <button type='submit'>
          Agregar
        </button>
      </form>

      <section>
        <label htmlFor="status">
          Filter :
          <select name="status" id="status" value={selectedToDo} onChange={(e) => setSelectedToDo(e.target.value)}>
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
          </select>
        </label>

        {todos.length >= 1 ? <ul>
          {selectedToDo === 'all' ? todos.map((todo, i) => {
            return <li key={i}>
              <MdCheckBoxOutlineBlank onClick={() => handleCheck(i)} />
              INDEX: {i} - Status: {todo.status} - {todo.title} - {todo.time.toLocaleString()}
              <MdDelete role='button' onClick={() => handleDelete(i)} />
              <CiEdit />
            </li>
          })
            :
            null}

          {selectedToDo === 'incomplete' ? todos.filter(todo => todo.status === 'incomplete').map((todo, i) => {
            return <li key={i}>
              <MdCheckBoxOutlineBlank onClick={() => handleCheck(i)} />
              INDEX: {i} - Status: {todo.status} - {todo.title} - {todo.time.toLocaleString()}
              <MdDelete role='button' onClick={() => handleDelete(i)} />
              <CiEdit />
            </li>
          })
            :
            null}

          {selectedToDo === 'complete' ? todos.filter(todo => todo.status === 'complete').map((todo, i) => {
            return <li key={i}>
              <MdCheckBoxOutlineBlank onClick={() => handleCheck(i)} />
              INDEX: {i} - Status: {todo.status} - {todo.title} - {todo.time.toLocaleString()}
              <MdDelete role='button' onClick={() => handleDelete(i)} />
              <CiEdit />
            </li>
          })
            :
            null}
        </ul> : <p>No ToDos</p>}
      </section>

    </>
  )
}

export default App
