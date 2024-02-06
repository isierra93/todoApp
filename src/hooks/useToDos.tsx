import { useState } from "react";

export function useToDos () {
    const [title, setTitle] = useState<string>('')
    const [todos, setTodos] = useState<Array<{ title: string, time: Date, status: string }>>([])

    async function handleSubmit(e: { preventDefault: () => void }) {
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

    return {title, todos, setTitle, handleSubmit, handleCheck, handleDelete}
}