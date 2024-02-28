export type Todo = {
    _id: string
    body: string
    checked: boolean
    badges: String[]
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
}
