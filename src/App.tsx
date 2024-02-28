import { Container } from './components/Container'
import { Button } from './components/ui/button'
import { Input } from '@/components/ui/input'

function App() {
    return (
        <>
            <Container>
                <div className="flex-col flex-1 gap-4 border-2 w-1/4 h-3/4 p-4">
                    <div className="flex gap-4">
                        <Input className="text-secondary-foreground" />{' '}
                        <Button variant={'secondary'}>Add Todo</Button>
                    </div>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        <li>Listitem</li>
                    </ul>
                </div>
            </Container>
        </>
    )
}

export default App
