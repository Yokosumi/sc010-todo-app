import { useContext } from 'react'
import { AppContext } from '../../utils/AppContext'

export const TodoList = () => {
    const { todoList } = useContext(AppContext)
    return (
        <>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                {todoList.map((todo) => (
                    <li key={todo._id}>
                        {todo.body} - {todo.badges}
                    </li>
                ))}
            </ul>
        </>
    )
}
