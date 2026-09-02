import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

const App = () => {

  const users =[
    {
      img:'https://plus.unsplash.com/premium_photo-1661765213398-c51562d8ce3c?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      // color:'blue',
      class:"bg-red-500",
      intro:'', 
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      color:'lightseagreen',
      class:"bg-blue-500",
      intro:'', 
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1672373830660-4655ca9de6c3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      color:'orange',
      class:"bg-green-500",
      intro:'', 
      tag:'Underbanked'
    },
     {
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      color:'pink',
      class:"bg-pink-500",
      intro:'', 
      tag:'Underbalanced'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'black',
      intro:'',
      class:"bg-violet-500",
      tag:'Average'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App