export const ListOfTodos = (select) => {
    console.log(select);
    if(select === 'all')

    return <section>
                {/* <ul>
                    {todos.map((todo, i) => {
                        return <li key={i}>
                            <MdCheckBoxOutlineBlank onClick={() => handleCheck(i)} />
                            INDEX: {i} - Status: {todo.status} - {todo.title} - {todo.time.toLocaleString()}
                            <MdDelete role='button' onClick={() => handleDelete(i)} />
                            <CiEdit />
                        </li>
                    }).reverse()}
                </ul> */}
            </section>
}