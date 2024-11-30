import React from 'react'

export default function CardBanner() {
  return (
    <div className='bg-white'>
      <section className='flex overflow-hidden items-center justify-center h-full'>
        <div className='h-96 md:h-3/4 w-full overflow-hidden relative '>
            <img src="https://demo2.cybersoft.edu.vn/static/media/bgAbout.19ac825c.png" alt="banner" className='w-full h-full object-cover bg-contain' />
            <div className='absolute inset-0 flex items-center justify-center z-20'>
                <h1 className='textSubBanner text-white tracking-wide'>Banner</h1>
            </div>
            <div className='absolute inset-0 h-1/10 bg-gradient-to-b from-black/10 to-transparent pointer-events-none z-0'></div>
        </div>
      </section>
    </div>
  )
}
