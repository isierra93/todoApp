import { TodoForm } from './TodoForm.tsx'
import { EditTodoForm } from "./EditTodoForm.tsx"
import { Todo } from './Todo.tsx'
import { useTodoWrapper } from '../hooks/useTodoWrapper.tsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from "@fortawesome/free-solid-svg-icons"

export const TodoWrapper = () => {
    const {todos, addTodo, updateTodo, toggleComplete, deleteTodo, editTodo} = useTodoWrapper()

    return <div className='TodoWrapper'>
        <h1>ToDo List <FontAwesomeIcon icon={faClipboardList} /> <FontAwesomeIcon icon={faPencil} /></h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
            todo.isEdiging ? 
            <EditTodoForm key={index} updateTodo={updateTodo} task={todo}/> :
            <Todo key={index} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
        ))}
    </div>
}