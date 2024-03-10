import { createContext, useState, useEffect, useContext } from 'react'
import { Todo, EditMode } from '../types'
import { fetchSingleEndpoint } from '@/lib/tools/utils'
import axios from 'axios'

const URL = 'localhost:3075'

// * The AppContextType is a type that defines the shape of the context object.
type AppContextType = {
    todoList: Todo[]
    editMode: boolean
    editText?: string
    editIndex: number
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
    setEditText: React.Dispatch<React.SetStateAction<string>>
    setEditIndex: React.Dispatch<React.SetStateAction<number>>
    handlePost: (value: string) => void
    handleDelete: (_id: string) => void
    handlePatch: (id: string, value: string) => void
    handleEditMode: (index: number) => void
}

//* The todoContext object is the default value of the context object.
const todoContext: AppContextType = {
    todoList: [] as Todo[],
    editMode: false,
    editText: '',
    editIndex: 0,
    setTodoList: () => {},
    setEditMode: () => {},
    setEditText: () => {},
    setEditIndex: () => {},
    handlePost: () => {},
    handleDelete: (_id: string) => {},
    handlePatch: () => {},
    handleEditMode: () => {},
}

type AppProviderProps = {
    children: React.ReactNode
}

export const AppContext = createContext<AppContextType>(todoContext)

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [todoList, setTodoList] = useState<Todo[]>([] as Todo[])
    const [editMode, setEditMode] = useState<EditMode>(false)
    const [editText, setEditText] = useState<string>('')
    const [editIndex, setEditIndex] = useState(0)

    const handlePost = async (value: string) => {
        try {
            const newTodo = {
                body: value,
                checked: false,
                badges: [''],
            }

            const response = await axios.post(`http://${URL}/todos`, newTodo, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            })
            if (response.status === 201) {
                setTodoList((prev) => [...prev, response.data])
            }
        } catch (e: any) {
            throw new Error(e)
        }
    }

    const handleDelete = async (id: string) => {
        try {
            const response = await axios.delete(`http://${URL}/todos/${id}`)
            if (response.status === 200) {
                setTodoList((prev) => prev.filter((todo) => todo._id !== id))
            }
        } catch (e: any) {
            throw new Error(e)
        }
    }

    const handlePatch = async (id: string, value: string) => {
        try {
            const response = await axios.patch(
                `http://${URL}/todos/${id}`,
                { body: value },
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                }
            )
            if (response.status === 200) {
                setTodoList((prev) =>
                    prev.map((todo) => (todo._id === id ? response.data : todo))
                )
                setEditMode(false)
            }
        } catch (e: any) {
            throw new Error(e)
        }
    }

    const handleEditMode = (index: number) => {
        setEditMode(true)
        setEditIndex(index)
    }

    useEffect(() => {
        fetchSingleEndpoint('todos').then((data) => setTodoList(data))
    }, [])

    // * The contextValue object is the value of the context object.
    const contextValue: AppContextType = {
        todoList,
        editMode,
        editText,
        editIndex,
        setTodoList,
        setEditMode,
        setEditText,
        setEditIndex,
        handlePost,
        handleDelete,
        handlePatch,
        handleEditMode,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

// * custom hook for using the AppContext
export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider')
    }
    return context
}
