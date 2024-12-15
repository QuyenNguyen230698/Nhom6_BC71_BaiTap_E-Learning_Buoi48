import React from 'react'

export default function CardBanner({dataBanner}) {
  const {title, subTitle, img} = dataBanner;
  return (
    <div data-aos="fade-up" data-aos-delay="100" className='bg-white w-full h-full'>
      <section className='flex flex-col overflow-hidden items-center justify-center w-full h-auto '>
        <div className='h-96 md:h-4/6 w-full overflow-hidden relative '>
            <img src={img} alt="banner" className='w-full h-35r object-cover' style={{ borderRadius: '0px' }} />
            <div className='absolute inset-0 flex flex-col gap-2 items-center justify-center z-20'>
                <p data-aos="fade-up" data-aos-delay="100" className='text-white textSubBanner uppercase text-center'>{title}</p>
                <h1 data-aos="fade-up" data-aos-delay="200" className='textTitle uppercase text-center tracking-wide text-yellow-500'>{subTitle}</h1>
            </div>
            <div className='absolute inset-0 h-1/10 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-0'></div>
        </div>
      </section>
    </div>
  )
}
