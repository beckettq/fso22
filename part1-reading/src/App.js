import React, {useState} from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}. You are {props.age} years old.</p>
    </div>
  )
}



const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)

  return (
    <div>
      <button onClick = {increment}>++</button>
      <p>{count}</p>
    </div>
  )
}

export default App
