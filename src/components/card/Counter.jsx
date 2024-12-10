// src/components/Counter.jsx
import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

const Counter = ({ endValue }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const countUp = new CountUp(counterRef.current, endValue);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }, [endValue]);

  return <span ref={counterRef}></span>;
};

export default Counter;
