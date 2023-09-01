import React, { useEffect, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import Users from "../Users"



function Login() {
    let naviagate=useNavigate()
    const [show,setshow]=useState(false)
    const  [logemail,setlogemail]=useState("")
    const [logpassword,setlogpassword]=useState("")



    

     

    const handlechange=(e)=>{
            let name=e.target.name
            let value=e.target.value
            
            if(name==='email'){
                        
                setlogemail(value)
            }else{
                setlogpassword(value)
            }
    }


    const handlesave=()=>{
            setlogemail("")
            setlogpassword("")
            filterdata()
            
    }

    const filterdata=()=>{
                  Users.filter((e)=>{
                  if (e.password==logpassword.toLowerCase() && e.email==logemail.toLowerCase()){
                        
                        localStorage.setItem("users",JSON.stringify(e.id))
                        naviagate('/dashboard')
                  }
                 
              
                  
        })
       
    }

  


    
  

  return <>
        
       

              <div className='login'>

                

                <div className='login_inner'>

                <div className='title'>
                        <h1>S C H O O L</h1>
                </div>

                        <div className='login_username'>
                                <input name='email' type='email' onChange={handlechange} value={logemail}/>
                                <label>Email</label>

                        </div>
                        {
                            show? <div className='login_password'>
                            <input name='password' type='none' onChange={handlechange} value={logpassword}/>
                            <label>Password</label>
                            <div className='logo'>
                            <i className="fa-solid fa-eye" onClick={()=>setshow(show=>!show)}></i>
                            </div>
                    </div>:
                    <div className='login_password'>
                    <input name='password' type='password' onChange={handlechange} value={logpassword}/>
                    <label>Password</label>
                    <div className='logo'>
                    <i className="fa-sharp fa-solid fa-eye-slash" onClick={()=>setshow(show=>!show)}></i>
                    </div>
            </div>

                        }
                        
                        
                        <div className='btn'>
                            <button className='login_btn' onClick={handlesave}>Login</button>
                        </div>

                    <div className='footer'>
                            <p>Don't have an account? <span onClick={()=>naviagate('/signup')}>Sign up</span></p>
                    </div>
                </div>
        </div>

        
        
        
                        
  </>
}

export default Login
