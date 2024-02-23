import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface TodoProps {
    task: {
        task: string;
        id: string;
        time: Date;
        completed: boolean;
        isEdiging: boolean;
    }
    toggleComplete: (id: string) => void;
    deleteTodo: (id: string) => void;
    editTodo: (id: string) => void;
}

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }: TodoProps) => {

    return (
        <div className="Todo" >
            <p className={task.completed ? 'completed' : ''}
                onClick={() => toggleComplete(task.id)}>
                {task.task}
            </p>
            <div>
                <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )

}