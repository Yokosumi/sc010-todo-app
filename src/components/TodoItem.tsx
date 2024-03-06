import { RiDeleteBin5Line } from 'react-icons/ri'
import { RiEdit2Line } from 'react-icons/ri'
import { Checkbox } from '@/components/ui/checkbox'
import { useAppContext } from '@/utils/AppContext'

type props = {
    children: React.ReactNode
    id: string
}

export const TodoItem = ({ children, id }: props) => {
    const { handleDelete } = useAppContext()
    return (
        <>
            <Checkbox className="h-5 w-5 bg-white" />
            <div className="flex-grow">{children}</div>
            <RiEdit2Line
                className="cursor-pointer hover:text-blue-500"
                size={20}
            />
            <RiDeleteBin5Line
                className="cursor-pointer hover:text-red-500"
                size={20}
                onClick={() => handleDelete(id)}
            />
        </>
    )
}
