import React, { useEffect,useState } from 'react'
import { CircularProgress } from '@mui/material'
import Header from '../Main Component/Header'
import "./Student.css"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';



function Student({loading,setloading}) {
  let navigate=useNavigate()

    useEffect(()=>{
        setloading(true)
        setTimeout(() => {
            setloading(false)
        },1000);
    },[])


    const class1=()=>{
      let data=localStorage.getItem('users')
      if(data==1){
          navigate('/class1')
      }
      else{
          toast.error(`Invalid class & Your class number is ${data}`)
      }
}

const class2=()=>{
  let data=localStorage.getItem('users')
  if(data==2){
      navigate('/class2')
  }
  else{
      toast.error(`Invalid class & Your class number is ${data}`)
  }
}

const class3=()=>{
  let data=localStorage.getItem('users')
  if(data==3){
      navigate('/class3')
  }
  else{
      toast.error(`Invalid class & Your class number is ${data}`)
  }
}

const class4=()=>{
  let data=localStorage.getItem('users')
  if(data==4){
      navigate('/class4')
  }
  else{
      toast.error(`Invalid class & Your class number is ${data}`)
  }
}

const class5=()=>{
  let data=localStorage.getItem('users')
  if(data==5){
      navigate('/class5')
  }
  else{
      toast.error(`Invalid class & Your class number is ${data}`)
  }
}

const class6=()=>{
  let data=localStorage.getItem('users')
  if(data==6){
      navigate('/class6')
  }
  else{
      toast.error(`Invalid class & Your class number is ${data}`)
  }
}

const class7=()=>{
  let data=localStorage.getItem('users')
  if(data==7){
      navigate('/class7')
  }
  else{
      toast.error(`Invalid class & Your class number is ${data}`)
  }
}

const class8=()=>{
  let data=localStorage.getItem('users')
  if(data==8){
      navigate('/class8')
  }
  else{
      toast.error(`Invalid class & Your class number is ${data}`)
  }
}

const class9=()=>{
  let data=localStorage.getItem('users')
  if(data==9){
      navigate('/class9')
  }
  else{
      toast.error(`Invalid class & Your class number is ${data}`)
  }
}
const class10=()=>{
  let data=localStorage.getItem('users')
  if(data==10){
      navigate('/class10')
  }
  else{
      toast.error(`Invalid class & Your class number is ${data}`)
  }
}
    
  return <>
      {
          loading?
        <div className='main'>
          <CircularProgress />
         </div>
      : 
      <div className='container'>
    
      <Header/> 

    

        <div className='main_container'>
      

            <div className='box' onClick={class1}>
            <div className='box_title'>
                <h1>Class 1</h1>
            </div>
            </div>

            <div className='box' onClick={class2}>
            <div className='box_title'>
                <h1>Class 2</h1>
            </div>
            </div>

            <div className='box' onClick={class3}>
            <div className='box_title'>
                <h1>Class 3</h1>
            </div>
            </div>

            <div className='box' onClick={class4}>
            <div className='box_title'>
                <h1>Class 4</h1>
            </div>
            </div>

            <div className='box' onClick={class5}>
            <div className='box_title'>
                <h1>Class 5</h1>
            </div>
            </div>

            <div className='box' onClick={class6}>
            <div className='box_title'>
                <h1>Class 6</h1>
            </div>
            </div>

            <div className='box'onClick={class7}>
            <div className='box_title'>
                <h1>Class 7</h1>
            </div>
            </div>

            <div className='box' onClick={class8}>
            <div className='box_title'>
                <h1>Class 8</h1>
            </div>
            </div>

            <div className='box' onClick={class9}>
            <div className='box_title'>
                <h1>Class 9</h1>
            </div>
            </div>

            <div className='box' onClick={class10}>
            <div className='box_title'>
                <h1>Class 10</h1>
            </div>
            </div>

        </div>
        </div>

      }
         


    
    
  
  </>
}

export default Student
