import React from 'react'

export default function CardBanner() {
  return (
    <div className='bg-white'>
      <section className='flex overflow-hidden items-center justify-center h-full'>
        <div className='h-96 md:h-3/4 w-full overflow-hidden relative '>
            <img src="https://demo2.cybersoft.edu.vn/static/media/bgAbout.19ac825c.png" alt="banner" className='w-full skeleton md:min-h-screen md:max-h-screen h-full bg-contain object-cover' style={{ borderRadius: '0px' }} />
            <div className='absolute inset-0 flex flex-col gap-2 items-center justify-center z-20'>
                <p className='text-green-500 textTitle uppercase'>V learning học là vui</p>
                <h1 className='textSubBanner text-center tracking-wide text-orange-400'>Cùng nhau khám phá nhưng điều mới mẻ</h1>
                <p className='text-white textCardTitle'>Học đi đôi với hành</p>
            </div>
            <div className='absolute inset-0 h-1/10 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-0'></div>
        </div>
      </section>
    </div>
  )
}
