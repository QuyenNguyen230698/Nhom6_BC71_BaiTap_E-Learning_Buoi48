import React from 'react'

export default function CardCommunicate() {
    const listBrand = [
        {src: '/img/brand1.png', alt: 'brand1'},
        {src: '/img/brand2.png', alt: 'brand2'},
        {src: '/img/brand3.avif', alt: 'brand3'},
        {src: '/img/brand4.avif', alt: 'brand4'},
        {src: '/img/brand5.avif', alt: 'brand5'},
        {src: '/img/brand6.avif', alt: 'brand6'},
        {src: '/img/brand7.avif', alt: 'brand7'},
        {src: '/img/brand8.png', alt: 'brand8'},
      ]
  return (
    <div>
        <div className='flex flex-wrap items-center justify-center gap-10 py-4 w-full bg-cover bg-center' style={{backgroundImage: 'url(https://res.cloudinary.com/dbcr9t1rd/image/upload/v1733579716/The-World-Map-scaled_ewwm05.jpg)'}}>
          {listBrand.map((brand, index) => (
            <img src={brand.src} alt={brand.alt} key={index} className='w-20 h-20 object-contain' />
          ))}
        </div>
    </div>
  )
}
