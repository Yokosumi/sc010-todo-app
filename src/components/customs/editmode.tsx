import { useAppContext } from '@/lib/contexts/AppContext'
import { useState } from 'react'

type props = {
    id: string
    body: string
}

export const EditMode = ({ id, body }: props) => {
    const [value, setValue] = useState(body)
    const { handlePatch, setEditMode } = useAppContext()
    return (
        <>
            <section
                key={id}
                className="flex items-center justify-center text-black"
            >
                <input
                    className="w-11/12 border-b-2 border-gray-400 p-2"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type="text"
                />
                <button
                    className="bg-green-500 p-2 text-white"
                    onClick={() => handlePatch(id, value)}
                >
                    Save
                </button>
                <button
                    className="bg-red-500 p-2 text-white"
                    onClick={() => setEditMode(false)}
                >
                    Cancel
                </button>
            </section>
        </>
    )
}
