import React from 'react'
import Header from '../Main Component/Header'
import Users from "../Users"

function Class4() {
  let data=localStorage.getItem('users')

  return (
    <div className='table'>
    <Header/>
    <div className='box_header'>
     
 <div className='box'>
   
   {
     Users.filter((e)=>e.id==data).map((e,i)=>(
         <ul key={i}>
             <li> Class:{e.id}</li>
             <li>Email:{e.email}</li>
             <li>Name:{e.name}</li>
             <li>Password:{e.password}</li>
         </ul>
     ))
   }
    </div>
    </div>
 </div>
  )
}

export default Class4
