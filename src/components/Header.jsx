import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='flex flex-row gap-4 w-full'>
      <div className='textBanner'><button><NavLink to="/">Home</NavLink></button></div>
      <div className='textSubBanner'><button><NavLink to="/login">Login</NavLink></button></div>
      <div className='textTitle'><button><NavLink to="/signup">Signup</NavLink></button></div>
      <div className='textSubTitle'><button><NavLink to="/account">Account</NavLink></button></div>
    </header>
  )
}
