import { useContext } from 'react'
import { AppContext } from '../../utils/AppContext'
import { Button } from '@/components/ui/button'

export const TodoList = () => {
    const { todoList, handleDelete } = useContext(AppContext)
    return (
        <>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                {todoList.map((todo) => (
                    <li key={todo._id}>
                        {todo.body} - {todo.badges}{' '}
                        <Button
                            variant={'secondary'}
                            onClick={() => handleDelete(todo._id)}
                        >
                            Delete Todo
                        </Button>
                    </li>
                ))}
            </ul>
        </>
    )
}
