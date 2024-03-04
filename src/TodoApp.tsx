import { Container } from './components/Container'
import { Button } from './components/ui/button'
import { Input } from '@/components/ui/input'
import { TodoList } from './components/TodoList'
import axios from 'axios'
import { useState } from 'react'

export const TodoApp = () => {
    const [inputState, setInputState] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const todoBody = event.target.value
        setInputState(todoBody)
    }

    const handlePost = async (value: string) => {
        try {
            const newTodo = {
                body: value,
                checked: false,
                badges: [''],
            }

            await axios.post('http://localhost:3075/todos', newTodo, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            })
        } catch (e: any) {
            throw new Error(e)
        }
    }

    return (
        <>
            <Container className="justify-center" size="full" direction="row">
                <Container className="border-2" size="md">
                    <Container direction="row">
                        <Input
                            className="text-secondary-foreground"
                            onChange={handleInputChange}
                        />
                        <Button
                            onClick={() => handlePost(inputState)}
                            variant={'secondary'}
                        >
                            Add Todo
                        </Button>
                    </Container>
                    <TodoList />
                </Container>
            </Container>
        </>
    )
}
