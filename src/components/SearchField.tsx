import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

type Props = {
    type: "reponame" | "login"
    placeholder: string
}

export const SearchField = ({ type, placeholder }: Props) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const initialValue = searchParams.get(type) || ""
    const [inputValue, setInputValue] = useState(initialValue)

    const updateSearchParams = (key: string, value: string) => {
        const newParams = new URLSearchParams(searchParams)
        if (value) {
            newParams.set(key, value)
        } else {
            newParams.delete(key)
        }
        setSearchParams(newParams)
    }

    useEffect(() => {
        setInputValue(initialValue)
    }, [initialValue])

    return (
        <div className="w-full">
            <input
                type="text"
                className="w-full px-2 py-1 bg-gray-200 text-gray-700 text-base rounded-lg"
                value={inputValue}
                onChange={(value) => updateSearchParams(type, value.target.value)}
                placeholder={placeholder}
            />
        </div>
    )
}