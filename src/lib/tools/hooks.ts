import { useState, ChangeEvent } from 'react'

type UseInputTuple<T> = [
    T,
    (e: ChangeEvent<HTMLInputElement>) => void,
    () => void,
]

/**
 * Custom hook for handling input values.
 *
 * @param initialValue - The initial value for the input.
 * @returns A tuple containing the current value, a change event handler, and a function to reset the input.
 * @example const [input, handleInputChange, handleInputReset] = useInput<string>('')
 */
export const useInput = <T>(initialValue: T): UseInputTuple<T> => {
    const [value, setValue] = useState(initialValue)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value as T)
    }

    const resetInput = () => {
        setValue(initialValue)
    }

    return [value, handleInputChange, resetInput]
}
