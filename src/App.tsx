import { Container } from './components/Container'
import { Button } from './components/ui/button'

function App() {
    return (
        <>
            <Container>
                <div className="border-2 w-1/4 h-fit p-4">
                    <Button variant={'secondary'}>Add Todo</Button>
                </div>
            </Container>
        </>
    )
}

export default App
