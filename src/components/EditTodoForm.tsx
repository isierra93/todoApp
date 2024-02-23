import { useState } from 'react'

interface EditTodoFormProps {
    task: {
            task: string;
            id: string;
            time: Date;
            completed: boolean;
            isEdiging: boolean;
    }
    updateTodo: (todo: string, id: string) => void;
}

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