import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='flex flex-row gap-4 w-full'>
      <div><button><NavLink to="/">Home</NavLink></button></div>
      <div><button><NavLink to="/login">Login</NavLink></button></div>
      <div><button><NavLink to="/signup">Signup</NavLink></button></div>
      <div><button><NavLink to="/account">Account</NavLink></button></div>
    </div>
  )
}
