import { useToDos } from '../hooks/useToDos.tsx'
import { ListOfTodos } from './ListOfTodos.tsx'

export const Form = () => {

    const { todos, title, handleSubmit, setTitle } = useToDos()

    return <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="title">
                <input
                    type="text"
                    id='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Add new task'
                    required
                />
            </label>
            <button type='submit'>
                Agregar
            </button>
        </form>
        <ListOfTodos todos={todos}/>
    </>
}