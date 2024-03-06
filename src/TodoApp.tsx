import { Container } from './components/ui/Container'
import { Button } from './components/ui/button'
import { Input } from '@/components/ui/input'
import { TodoList } from './components/TodoList'
import { useState } from 'react'
import { useAppContext } from '@/utils/AppContext'

export const TodoApp = () => {
    const { handlePost } = useAppContext()
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
                            value={inputState}
                            onChange={handleInputChange}
                        />
                        <Button
                            onClick={() => {
                                handlePost(inputState)
                                setInputState('')
                            }}
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
