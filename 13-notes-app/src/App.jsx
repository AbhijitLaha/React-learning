import React from 'react'

const App = () => {
  return (
    <div>
      <form className='flex justify-between'>
        <input 
        type="text" 
        placeholder='Enter Notes Heading' 
        />
        <input type="text" 
        className='' 
        placeholder='Write details' 
        />
      </form>
    </div>
  )
}

export default App