import React from "react";
import { useSelector } from "react-redux";

export default function Loading() {
    let isLoading = useSelector((state) => state.loadingSlice.isLoading)
    
  return isLoading ? (
    <div className="fixed w-screen h-screen top-0 left-0 bg-gray-800 z-50 flex justify-center items-center overflow-hidden">
            <div className="flex flex-col w-fit h-fit gap-2">
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-green-500 uppercase tracking-widest'>V-LEARNING</h2>
                <progress className="progress progress-success container mx-auto w-20" style={{ height: "6px" }}></progress>
            </div>
        </div>
  ) : (
    <></>
  );
}
