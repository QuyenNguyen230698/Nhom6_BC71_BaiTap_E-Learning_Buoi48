import React, { useState } from 'react';

export default function CardCommunicate() {

  const listBrand = [
    { src: '/img/communicate1.avif', alt: 'brand1' },
    { src: '/img/communicate2.png', alt: 'brand2' },
    { src: '/img/communicate3.png', alt: 'brand3' },
    { src: '/img/communicate4.png', alt: 'brand4' },
    { src: '/img/communicate5.png', alt: 'brand5' },
    { src: '/img/communicate6.png', alt: 'brand6' },
    { src: '/img/communicate7.png', alt: 'brand7' },
    { src: '/img/communicate8.png', alt: 'brand8' },
    { src: '/img/communicate9.png', alt: 'brand9' },
    { src: '/img/communicate10.png', alt: 'brand10' },
    { src: '/img/communicate11.png', alt: 'brand11' },
    { src: '/img/communicate12.png', alt: 'brand12' }
  ];

  return (
    <div>
      <div className="relative w-full h-full overflow-hidden bg-cover bg-center py-10 overflow-hidden" style={{ backgroundImage: 'url(https://res.cloudinary.com/dbcr9t1rd/image/upload/v1732874597/Contact_uoiab3.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative w-full h-auto container mx-auto px-4">
          <div className="grid grid-cols-4 w-full h-full justify-center items-center gap-4 lg:gap-8">
            {listBrand?.map((image, idx) => (
              <div data-aos="fade-up" data-aos-delay="200" key={idx} className="w-full h-full flex justify-center items-center col-span-1">
                <img src={image.src} alt={image.alt} aria-label="slideimage" className="w-40 h-12 lg:h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
