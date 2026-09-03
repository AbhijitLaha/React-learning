import React from 'react'

const App = () => {

 function inputChanging(elem){
  console.log(elem);
  
 }

  return (
    <div>
      <input onChange={function(elem){
        inputChanging(elem.target.value)
        
      }} type='text' placeholder='Enter Name'></input>
    </div>
  )
}

export default App