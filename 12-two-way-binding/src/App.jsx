// import React from 'react'
import React , { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form Submitted by" , title);

    setTitle('')
    
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
         type="text" 
         value = {title}
         placeholder='Enter your Name' 
         onChange={(e) =>{
          setTitle(e.target.value);
          
         }}
         />
        <button>Submit</button>
      </form>
     
    </div>
  )
}

export default App