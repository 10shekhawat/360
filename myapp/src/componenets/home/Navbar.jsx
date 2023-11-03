import React from 'react'
import logo from "../assets/logo.svg"
import menuIcon from "../assets/menuIcon.svg"
import logOut from "../assets/logOut.svg"

const Navbar = () => {
  return (
    <>
    <div className='container'>
    <div className='row align-items-center'>
        <div className='col-2'>
            <img src={menuIcon} alt='jg' />
        </div>
        <div className='col-8 text-center'>
            <img src={logo} alt='jg' />
        </div>
        <div className='col-2'>
            <img src={logOut} alt='jg' />
        </div>
    </div>
</div>
    </>
  )
}

export default Navbar
