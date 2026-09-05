import React from 'react'

const App = () => {

 function pageScrolling(elem){
  if(elem>0){
    console.log("Up scrolling");
  }else{
    console.log("down scrolling");
    
  }
 }

  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
      
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App