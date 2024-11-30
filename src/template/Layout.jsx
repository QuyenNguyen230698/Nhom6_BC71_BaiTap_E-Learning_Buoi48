import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({main}) {
  return (
    <div className='bg-white flex flex-col h-full w-full'>
      <Header />
      {main}
      <Footer />
    </div>
  )
}
