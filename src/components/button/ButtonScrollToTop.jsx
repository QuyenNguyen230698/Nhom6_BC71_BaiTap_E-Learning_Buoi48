import React, { useState, useEffect } from 'react';

export default function ButtonScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-3 lg:right-8 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors translate-all duration-500 ease-in-out z-30 ${
        isVisible ? 'opacity-100 animate-jump-in animate-bounce' : 'opacity-0 pointer-events-none animate-jump-out'
      }`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
