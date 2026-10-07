import React from 'react'
import axios from "axios";
import { useState } from "react";

const App = () => {

  const [userData, setUserData] = useState([]);

  const getData =async () =>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=20')
    
    setUserData(response.data)
    
  }

  let printUserData = 'No user available'

  if(userData.length > 0){
    printUserData = userData.map(function(elem, idx){

      return <div className='h-40 w-44 bg-white'>
        <img className='h-full object-cover' src= {elem.download_url} alt="" />
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <button onClick={getData} className='bg-green-500 text-white active:scale-95 mb-3 rounded py-2 px-5'>
        get data
      </button>

      <div className='flex flex-wrap gap-5'>
        {printUserData}
      </div>
    </div>
  )
}

export default App