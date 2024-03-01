import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { TodoProps } from '../interfaces/interfaces.ts'

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }: TodoProps) => {

    return (
        <div className="Todo" >
            <p className={task.completed ? 'completed' : ''}
                onClick={() => toggleComplete(task.id)}>
                {task.task}
            </p>
            <div>
                {task.completed ? <></> : <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} onClick={() => editTodo(task.id)} />}
                <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )

}