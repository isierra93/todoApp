import { useState } from 'react'
import { EditTodoFormProps } from '../interfaces/interfaces.ts';

export const EditTodoForm = ({ task, updateTodo }: EditTodoFormProps) => {

    const [value, setValue] = useState(task.task)
    
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        updateTodo(value, task.id)
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
                    placeholder='Update task'
                    required
                />
            </label>
            <button className='todo-btn' type='submit'>
                Add task
            </button>
        </form>
    </>
}