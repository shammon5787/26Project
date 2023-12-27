import React from 'react'
import { useSelector } from 'react-redux'

const Todos = () => {

    const todos = useSelector(state =>state.todos)
    console.log(todos)

  return (
    <div>
      <h2>TODOS</h2>
      {
        todos.map((todo)=>(
            <div key={todo.id}>{todo.text}</div>
        ))
      }
    </div>
  )
}

export default Todos
