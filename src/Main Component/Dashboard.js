import React from 'react'
import { useState,useEffect } from 'react'
import { ClipLoader } from 'react-spinners'
import "./Dashboard.css"
import { useNavigate } from 'react-router-dom'
import Header from './Header'



function Dashboard({loading,setloading}) {


    const naviagate=useNavigate()

    useEffect(()=>{
      setloading(true)
      setTimeout(() => {
           setloading(false)
      }, 1000);
   },[])
//   console.log(id)
  return <>


{
        
        loading?
        <div className='main'>
        <ClipLoader
        color={"#FF0000"}
        loading={loading}
       
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
        :
    <div>
        <Header/>
        
    <div className='dash'> 
  
        <div className='student'>
            <h1>Student</h1>
        
        <div className='student_pic'>
            <img src='/images/student1.webp'/>
        </div>
        <div className='student_button'>
              <button onClick={()=>naviagate('/student')}>Click me</button>
        </div>
        </div>


        <div className='mentor'>
            <h1>Mentor</h1>
       
        <div className='mentor_pic'>
            <img src='/images/teacher1.webp'/>
        </div>
        <div className='mentor_button'>
              <button  onClick={()=>naviagate('/mentor')}>Click me</button>
        </div>
        </div>


        <div className='management'>
            <h1>Management</h1>
       
        <div className='management_pic'>
            <img src='/images/management.webp'/>
        </div>
        <div className='management_button'>
              <button  onClick={()=>naviagate('/management')}>Click me</button>
        </div>
        </div>
    </div>
    </div>
    
    
    
    
    
}
  </>
}

export default Dashboard
