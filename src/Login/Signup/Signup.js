import React, { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import "./Signup.css"
import { toast } from 'react-toastify'
import Login from '../Login'
function Signup() {



        const [show,setshow]=useState(false)
        const [confirmshow,setconfirmshow]=useState(false)

        const[email,setemail]=useState('')
        const[username,setusername]=useState('')
        const[password,setpassword]=useState('')
        const[confirmpassword,setconfirmpassword]=useState('')
        const [item,setitem]=useState([])
        const [collection,setcollection]=useState({})

        const navigate=useNavigate()

        

       useEffect(()=>{
            function getdata(){
           let data= localStorage.getItem('users')
           setcollection(data)
           
    }
    getdata()

       },[])
           console.log(collection)

    



        const handlechange=(e)=>{

                const name=e.target.name
                const value=e.target.value 

                if(name==='email'){
                    setemail(value)
                    
                }else if(name==='username'){
                    setusername(value)
                }else if(name==='password'){
                    setpassword(value)
                }else{
                   
                    setconfirmpassword(value)
                }
                
                
        }
        

            

            const handlesave=()=>{
                    let obj={}
                    obj.Email=email
                    obj.Username=username
                    obj.Password=password
                    obj.Confirmpassword=confirmpassword
                    save(obj)

            }

                async function condition(){
                    if(password!==confirmpassword){
                        return toast.error("password didn't match")
                    }

                    if(password && confirmpassword && username && email){
                        toast.success("Successfully Created")
                    }else{
                        return toast.error("All field are madndatory")
                    }
                    // navigate('/')
                }

                
            

            const save=(obj)=>{
                let array=item
                array.push(obj)
                setitem(array)
                setemail('')
                setpassword('')
                setconfirmpassword('')
                setusername('')
                localStorage.setItem('users',JSON.stringify(item))
                condition()

            }




            
  return <>
                
                
                
    <div className='signup'>           

<div className='signup_inner'>

<div className='signup_title'>
        <h1>S C H O O L</h1>
        <h2>{localStorage.getItem('user')}</h2>
</div>      

            <div className='signup_email'>
                <input name='email' type='email' onChange={handlechange} value={email}/>
                <label>Email</label>
                 </div>

    

        <div className='signup_username'>
                <input name='username' type='text' onChange={handlechange} value={username}/>
                <label>Username</label>
        </div>

        {show? <div className='signup_password'>
                <input name='password' type='none' onChange={handlechange} value={password}/>
                <label>Password</label>
                <div className='logo'>
                <i className="fa-solid fa-eye" onClick={()=>setshow(show=>!show)}></i>
                </div>
        </div>:

                <div className='signup_password'>
                <input name='password' type='password'onChange={handlechange}value={password}/>
                <label>Password</label>
                 <div className='logo'>
                    <i className="fa-sharp fa-solid fa-eye-slash" onClick={()=>setshow(show=>!show)}></i>
                    </div>

                </div>
        }

        
            {
                confirmshow?
                <div className='signup_confirmpass'>
                <input name='confirmpassword' type='none'  onChange={handlechange} value={confirmpassword}/>
                <label>Confirm Password</label>
                <div className='logo'>
                <i className="fa-solid fa-eye" onClick={()=>setconfirmshow(show=>!show)}></i>
                </div>
                </div>
            :
                <div className='signup_confirmpass'>
                <input name='confirm password' type='password'  onChange={handlechange} value={confirmpassword}/>
                <label>Confirm Password</label>
                <div className='logo'>
                    <i className="fa-sharp fa-solid fa-eye-slash" onClick={()=>setconfirmshow(show=>!show)}></i>
                    </div>
                </div>
            }
        

       
        
        <div className='signup_btn'>
            <button className='signup_btn' onClick={handlesave}>Sign Up</button>
        </div>

    <div className='signup_footer'>
            <p>Have an account? <span onClick={()=>navigate('/')}>Login</span></p>
    </div>
</div>
</div>



            {/* {
                collection.map((e,i)=>(
                    <Login e={e} key={i}/>
                ))
            } */}

                
  </>
}

export default Signup
