import React from 'react'
import RightCard from './RightCard'
// import 'remixicon/fonts/remixicon.css'


const RightContent = (props) => {
  console.log(props);
  

  return (
    <div id='right' className='h-full flex overflow-auto flex-nowrap gap-7 p-5 w-2/3 '>
        {props.users.map(function(elem, idx){
          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
        })}
      
    </div>
  )
}

export default RightContent 