import { useAppContext } from '@/utils/AppContext'

type props = {
    currentTodo?: string
    newTodo?: string
    id: string
}

export const EditMode = ({ currentTodo, newTodo, id }: props) => {
    const { handleEditMode, handleEditSave } = useAppContext()
    return (
        <>
            <div
                key={id}
                className="flex items-center justify-center text-black"
            >
                <input
                    defaultValue={currentTodo}
                    value={newTodo}
                    type="text"
                    className="w-11/12 border-b-2 border-gray-400 p-2"
                />
                <button
                    className="bg-green-500 p-2 text-white"
                    onClick={handleEditSave}
                >
                    Save
                </button>
                <button
                    className="bg-red-500 p-2 text-white"
                    onClick={handleEditMode}
                >
                    Cancel
                </button>
            </div>
        </>
    )
}
