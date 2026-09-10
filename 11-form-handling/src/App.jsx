import React from 'react'

const App = () => {

const submitHander =() =>{
  console.log("Form Submitted");
  
}

  return (
    <div>
      <form onSubmit={() =>{
        submitHndler()
      }}>
      <input type = "text" placeholder="Enter your name"> </input>
      <button>submite</button>
    </div>
  )
}

export defailt App