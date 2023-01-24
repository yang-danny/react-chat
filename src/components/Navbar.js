import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import DarkModeToggle from './DarkModeToggle'
import { FaSignOutAlt } from "react-icons/fa";
import Popup from 'reactjs-popup';
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className='navbar-content'>
       <Popup className='popup' trigger={<a><img src={currentUser.photoURL}  alt='user avatar ' className="logo"/></a>} position="right center">
    <div   style={{ height: '80px', width: '250px', backgroundColor: '#4caf50', borderRadius:'5px' }}>
      <div style={{ color:'#212121', margin:'15px', padding:'5px'}}>
        <p>Name: {currentUser.displayName}</p>
         <p>Email: {currentUser.email}</p>
      </div>
    </div>
 </Popup> 
 
      <DarkModeToggle />
        <a onClick={()=>signOut(auth)} className='toggleTheme'><FaSignOutAlt/></a>
        </div>
    </div>
  )
}

export default Navbar