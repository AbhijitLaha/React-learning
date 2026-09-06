import React from 'react'
import React, {useState} from 'react'

const App = () => {

  const [num, setNum] = useState(1)
  return (
    <div>
      <h1>Value of num is {num}</h1>
      <button>Click</button>
    </div>
  )
}

export default App