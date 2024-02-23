import { useState } from 'react'

interface TodoFormProps {
    addTodo: (todo: string) => void;
}

export const TodoForm = ({addTodo}:TodoFormProps) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e: { preventDefault: () => void }) =>{
        e.preventDefault()
        addTodo(value)
        setValue('')
    }

    return <>
        <form className='TodoForm' onSubmit={handleSubmit}>
            <label htmlFor="title">
                <input
                    className='todo-input'
                    type="text"
                    id='title'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='Add new task'
                    required
                />
            </label>
            <button className='todo-btn' type='submit'>
                Add task
            </button>
        </form>
    </>
}