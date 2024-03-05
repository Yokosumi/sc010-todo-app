import { RiDeleteBin5Line } from 'react-icons/ri'
import { RiEdit2Line } from 'react-icons/ri'
import { Container } from './Container'
// import { useContext } from 'react'
// import { AppContext } from '../../utils/AppContext'

type props = {
    children: React.ReactNode
}

export const TodoItem = ({ children }: props) => {
    // const { handleDelete, editMode, handleEditMode } = useContext(AppContext)
    return (
        <>
            <Container
                className="border-2 items-center bg-slate-700"
                direction="row"
            >
                <div className="flex-grow">{children}</div>
                <RiEdit2Line className="cursor-pointer" size={20} />
                <RiDeleteBin5Line className="cursor-pointer" size={20} />
            </Container>
        </>
    )
}
