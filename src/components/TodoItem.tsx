import { RiDeleteBin5Line } from 'react-icons/ri'
import { RiEdit2Line } from 'react-icons/ri'
import { Checkbox } from '@/components/ui/checkbox'
import { useAppContext } from '@/utils/AppContext'

type props = {
    children: React.ReactNode
    id: string
    index: number
}

export const TodoItem = ({ children, id, index }: props) => {
    const { handleDelete, handleEditMode } = useAppContext()
    return (
        <>
            <Checkbox className="h-5 w-5 bg-white" />
            <section className="flex-grow">{children}</section>
            <RiEdit2Line
                className="cursor-pointer hover:text-blue-500"
                size={20}
                onClick={() => handleEditMode(index)}
            />
            <RiDeleteBin5Line
                className="cursor-pointer hover:text-red-500"
                size={20}
                onClick={() => handleDelete(id)}
            />
        </>
    )
}
