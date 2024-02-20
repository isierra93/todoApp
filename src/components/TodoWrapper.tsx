import { useState } from 'react'
import { TodoForm } from './TodoForm.tsx'
import { Todo } from './Todo.tsx'
import { v4 as uuidv4 } from "uuid"

export const TodoWrapper = () => {
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

    const toggleComplete = (id: string): void => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = (id: string):void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id: string):void => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEdiging: !todo.isEdiging} : todo ))
    }

    return <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
            <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
        ))}
    </div>
}