import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'Abhijit', age:21})

  const btnClicked = ()=>{
    const newNum = {... num}
    newNum.user = 'Aman'
    newNum.age = 25
    setNum(newNum)    
    
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App