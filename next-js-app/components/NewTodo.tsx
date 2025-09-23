"use client" // This explicitly tells that this file is a client component

import { useState } from "react"

type NewTodoProps = {
    addTodo: (text: string) => Promise<number>
}

export default function NewTodo({ addTodo }: NewTodoProps) {
    const [text, setText] = useState("")

    async function handleSave() {
        let result = await addTodo(text) // !?! Client component calling a server function!! 🤯
        console.log("RESULT", result)
        location.reload()
    }

    return (
        <div className="border-2 rounded-md bg-yellow-200 mt-5">
            <input className="p-2" type="text" value={text} onChange={e=>setText(e.target.value)} />
            <button className="px-6" onClick={handleSave}>Save</button>
        </div>
    )
}