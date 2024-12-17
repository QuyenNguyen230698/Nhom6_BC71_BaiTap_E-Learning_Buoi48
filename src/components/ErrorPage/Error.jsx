import React from "react";

const Error = ({ code = "Error", message = "Something went wrong" }) => {
  return (
    <div className="flex flex-col container mx-auto max-w-4xl w-full h-full min-h-screen items-center justify-center">
      <h1 className="text-black-gray text-4xl font-bold">{code}</h1>
      <p className="text-gray-600 test-lg">{message}</p>
      <a href="/" className="btn btn-error text-center">
        Go back to Home
      </a>
    </div>
  );
};

export default Error;
