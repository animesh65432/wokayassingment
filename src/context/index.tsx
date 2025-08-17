import React, { createContext, useContext, useState } from "react"
import type { Todo } from "@/types"
import { dummyTodos } from "@/lib/utils"

type TodoContextType = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const Context = createContext<TodoContextType>({
    todos: [],
    setTodos: () => { },
})

type Props = {
    children: React.ReactNode
}

export const Provider = ({ children }: Props) => {
    const [todos, setTodos] = useState<Todo[]>(dummyTodos)

    return (
        <Context.Provider value={{ todos, setTodos }}>
            {children}
        </Context.Provider>
    )
}

export const useContextTodo = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error("useContextTodo must be used within a Provider")
    }
    return context
}