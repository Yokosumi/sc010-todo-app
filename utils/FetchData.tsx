import axios from 'axios'

const URL = 'localhost:3075'

export const fetchSingleEndpoint = async (endpoint: string) => {
    if (!endpoint) {
        throw new Error('Please enter a correct URL with a endpoint')
    }
    try {
        const response = await axios.get(`http://${URL}/${endpoint}`)
        const data = response.data
        return data
    } catch (error: any) {
        throw new Error(error)
    }
}

export const handlePost = async (value: string) => {
    try {
        const newTodo = {
            body: value,
            checked: false,
            badges: [''],
        }

        await axios.post(`http://${URL}/todos`, newTodo, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        })
    } catch (e: any) {
        throw new Error(e)
    }
}
