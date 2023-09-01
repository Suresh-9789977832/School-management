import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Header.css"
// import SchoolIcon from '@mui/icons-material/School';

function Header() {
    let naviagate=useNavigate()

    const logout=async()=>{
        naviagate('/')
    }
  return <>
        <div className='header'>
            <div className='header_logo'>
            <i className="fa-solid fa-graduation-cap fa-3x icon"></i>&nbsp; &nbsp;             
                             <div className='header_title'>
                <h1 onClick={()=>naviagate('/dashboard')}>S C H O O L &nbsp; I N </h1>
                <p>M a k e s &nbsp;&nbsp;a &nbsp;&nbsp; G r e a t&nbsp; &nbsp;F u t u r e</p>
            </div>
            </div>

            <div className='header_logout'>
                    <button onClick={logout}>LOGOUT</button>
            </div>
        </div>
  </>
}

export default Header
