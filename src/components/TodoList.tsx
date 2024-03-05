import { useContext } from 'react'
import { AppContext } from '../../utils/AppContext'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { RiEdit2Line } from 'react-icons/ri'
import { Container } from './Container'

export const TodoList = () => {
    const { todoList, handleDelete, editMode, handleEditMode } =
        useContext(AppContext)
    return (
        <>
            <ul className="my-6 ml-6  [&>li]:mt-2">
                {todoList.map((todo) => (
                    <Container
                        className="border-2 items-center bg-slate-700"
                        key={todo._id}
                        direction="row"
                    >
                        {editMode ? (
                            <li className="flex-grow">{todo.body}</li>
                        ) : (
                            <p className="flex-grow">Edit Mode</p>
                        )}

                        <RiEdit2Line
                            className="cursor-pointer"
                            size={20}
                            onClick={handleEditMode}
                        />
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
