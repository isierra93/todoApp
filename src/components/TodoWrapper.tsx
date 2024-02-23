import { TodoForm } from './TodoForm.tsx'
import { EditTodoForm } from "./EditTodoForm.tsx"
import { Todo } from './Todo.tsx'
import { useTodoWrapper } from '../hooks/useTodoWrapper.tsx'

export const TodoWrapper = () => {
    const {todos, addTodo, updateTodo, toggleComplete, deleteTodo, editTodo} = useTodoWrapper()

    return <div className='TodoWrapper'>
        <h1>TODO list</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
            todo.isEdiging ? <EditTodoForm key={index} updateTodo={updateTodo} task={todo}/> :
            <Todo key={index} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
        ))}
    </div>
}