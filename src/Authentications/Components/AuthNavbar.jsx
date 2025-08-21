import React from 'react'
import { Link } from 'react-router-dom'
// import logo from './assests/logo.png'
function AuthNavbar() {
  return (
    <>
      <nav className='shadow-md flex justify-between items-center w-full h-[70px]'>
            <div className="flex justify-center items-center">
                <img src={'/images/logo.png'} alt=""  className='w-fit h-[50px] bg-transparent mr-3'/>
                <h1 className='text-orange-500 font-semibold font-sans text-xl'>NovaCart</h1>
            </div>
            <div className="">
                <ul className='flex gap-4 mr-10 text-xl'>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                </ul>
            </div>
      </nav>
    </>
  )
}

export default AuthNavbar
