import { useContext } from 'react'
import { AppContext } from '../../utils/AppContext'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Container } from './Container'

export const TodoList = () => {
    const { todoList, handleDelete } = useContext(AppContext)
    return (
        <>
            <ul className="my-6 ml-6  [&>li]:mt-2">
                {todoList.map((todo) => (
                    <Container
                        key={todo._id}
                        direction="row"
                        className="border-2 items-center bg-slate-700"
                    >
                        <li className="flex-grow">{todo.body}</li>
                        <RiDeleteBin5Line
                            className="cursor-pointer"
                            size={20}
                            onClick={() => handleDelete(todo._id)}
                        />
                    </Container>
                ))}
            </ul>
        </>
    )
}
