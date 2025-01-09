import React from "react";

const Error = ({ code = "Error", message = "Something went wrong" }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="flex flex-col container mx-auto max-w-4xl w-full h-full min-h-screen bg-home items-center justify-center gap-2">
      <h1 className="text-black-gray text-4xl md:text-6xl font-bold">{code}</h1>
      <p className="text-gray-600 test-lg">{message}</p>
      <a onClick={scrollToTop} href="/" className="btn btn-error text-center">
        Go back Home
      </a>
    </div>
  );
};



export default Error;
