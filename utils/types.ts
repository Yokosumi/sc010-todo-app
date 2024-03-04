export type NewTodo = {
    body: string
    checked: boolean
    badges: string[]
}

export type Todo = NewTodo & {
    _id: string
}

// export type Badge = {
//     body: string
//     color: string
//     variant: string
// }

export type AppContextType = {
    todoList: Todo[]
    newTodo: Todo
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
    setNewTodo: React.Dispatch<React.SetStateAction<Todo>>
    handlePost: (value: string) => void
    handleDelete: (_id: string) => void
}
