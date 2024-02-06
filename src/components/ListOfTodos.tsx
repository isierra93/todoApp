import { MdDelete, MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useToDos } from '../hooks/useToDos.tsx';

interface ListOfTodosProps {
    todos: { title: string; time: Date; status: string }[];
}

export const ListOfTodos = (props: ListOfTodosProps) => {

    const { handleCheck, handleDelete } = useToDos()
    const { todos } = props

    return <section>
        {todos.length > 0 ?
            <ul>
                {todos.map((todo, i: number) => {
                    return <li key={i} className={todo.status}>
                        <MdCheckBoxOutlineBlank onClick={() => handleCheck(i)} />
                        INDEX: {i} - Status: {todo.status} - {todo.title} - {todo.time.toLocaleString()}
                        <MdDelete role='button' onClick={() => handleDelete(i)} />
                        <CiEdit />
                    </li>
                })}
            </ul>
            :
            <p>No hay todos</p>}
    </section>
}