import { Container } from './components/Container'
import { Button } from './components/ui/button'
import { Input } from '@/components/ui/input'
import { TodoList } from './components/TodoList'
import { handlePost } from '@/../utils/FetchData'
import { useState } from 'react'

export const TodoApp = () => {
    const [inputState, setInputState] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const todoBody = event.target.value
        setInputState(todoBody)
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
