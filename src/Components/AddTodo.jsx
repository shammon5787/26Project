import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/Todo/TodoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispetch = useDispatch()

    const addTodoHandler = (e) => {
        e.PreventDefault()
        dispetch(addTodo(input))
        setInput('')
    }

    return (
        <div>
            <form className="flex gap-4">
               
                    <input className="shadow appearance-none border rounded w-full  text-gray-700 leading-tight" type="text" placeholder="Username" value={input} onChange={(e)=>setInput(e.target.value)} />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-5 rounded" type="submit">
                        AddTodo
                    </button>
            </form>
        </div>
    )
}

export default AddTodo