import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({main}) {
  return (
    <div className='container mx-auto'>
      <Header />
      {main}
      <Footer />
    </div>
  )
}
