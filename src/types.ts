export type TodoList = Todo[]

export type Todo = {
    body: string
    checked: boolean
    badges: Badge[]
}

export type Badge = {
    body: string
    color: string
    variant: string
}
