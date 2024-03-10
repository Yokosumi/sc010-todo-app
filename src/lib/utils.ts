import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import axios from 'axios'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const sm = (className: string) => {
    return `sm:${className}`
}

const URL = 'localhost:3075'

export const fetchSingleEndpoint = async (endpoint: string) => {
    if (!endpoint) {
        throw new Error('Please enter a correct URL with a endpoint')
    }
    try {
        const response = await axios.get(`http://${URL}/${endpoint}`)
        const data = response.data
        console.log(data)
        return data
    } catch (error: any) {
        throw new Error(error)
    }
}
