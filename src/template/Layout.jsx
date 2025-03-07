import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ButtonScrollToTop from '../components/button/ButtonScrollToTop'

export default function Layout({main}) {
    // AOS animation
    useEffect(() => {
      AOS.init({
        offset: 5,
        delay: 0,
        duration: 1000,
        easing: 'ease',
        once: false,
        mirror: true,
      })
      //ismobile fade-up
      const updateAosAttributes = () => {
        const fadeLeftElements = document.querySelectorAll('[data-aos="fade-left"]');
        const fadeRightElements = document.querySelectorAll('[data-aos="fade-right"]');
  
        fadeLeftElements.forEach(element => {
          if (window.innerWidth <= 768) { // Assuming 768px as the mobile breakpoint
            element.setAttribute('data-aos', 'fade-up');
          } else {
            element.setAttribute('data-aos', 'fade-left');
          }
        });
  
        fadeRightElements.forEach(element => {
          if (window.innerWidth <= 768) {
            element.setAttribute('data-aos', 'fade-up');
          } else {
            element.setAttribute('data-aos', 'fade-right');
          }
        });
      };
  
      updateAosAttributes();
      window.addEventListener('resize', updateAosAttributes);
  
      return () => {
        window.removeEventListener('resize', updateAosAttributes);
      }; 
    }, []);
  return (
    <div className='bg-white text-black-gray flex flex-col h-full w-full'>
      <Header />
      {main}
      <Footer />
      <ButtonScrollToTop />
    </div>
  )
}
