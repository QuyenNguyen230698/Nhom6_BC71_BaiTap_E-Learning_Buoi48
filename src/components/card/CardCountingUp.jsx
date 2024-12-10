import React from "react";
import Counter from './Counter';

export default function CardCountingUp() {
  return (
    <div className="grid grid-cols-4 w-full h-full items-center justify-center gap-8 bg-teal-100 py-8 px-5 text-black-gray">
      <div data-aos="fade-up" data-aos-delay="100" className=" col-span-4 gap-2 lg:col-span-1 w-full h-auto flex flex-col items-center justify-center">
        <div className="w-full h-fit flex items-center justify-center  ">
          <img
            className="w-20 h-20 bg-contain "
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733650343/9_lyo8k7.png"
            alt=""
          />
        </div>

        <h1 className="font-bold text-6xl text-green-600"><Counter endValue={9000} /></h1>
        <p className="text-2xl uppercase font-light">Học viên</p>
      </div>

      <div data-aos="fade-up" data-aos-delay="100" className=" col-span-4 gap-2 lg:col-span-1 w-full h-auto flex flex-col items-center justify-center">
        <div className="w-full h-fit flex items-center justify-center ">
          <img
            className="w-20 h-20 bg-contain "
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733650350/10_wb6wqd.png"
            alt=""
          />
        </div>

        <h1 className="font-bold text-6xl text-green-600"><Counter endValue={1000} /></h1>
        <p className="text-2xl uppercase font-light">Khóa học</p>
      </div>

      <div data-aos="fade-up" data-aos-delay="100" className=" col-span-4 gap-2 lg:col-span-1 w-full h-auto flex flex-col items-center justify-center">
        <div className="w-full h-fit flex items-center justify-center ">
          <img
            className="w-20 h-20 bg-contain "
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733650356/11_dqlhko.png"
            alt=""
          />
        </div>

        <h1 className=" font-bold text-6xl text-green-600"><Counter endValue={33200} /></h1>
        <p className="text-2xl uppercase font-light">Giờ học</p>
      </div>

      <div data-aos="fade-up" data-aos-delay="100" className=" col-span-4 gap-2 lg:col-span-1 w-full h-auto flex flex-col items-center justify-center">
        <div className="w-full h-fit flex items-center justify-center">
          <img
            className="w-20 h-20 bg-contain "
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733650362/12_a6reoc.png"
            alt=""
          />
        </div>

        <h1 className=" font-bold text-6xl text-green-600"><Counter endValue={400} /></h1>
        <p className="text-2xl uppercase font-light">Giảng viên</p>
      </div>
    </div>
  );
}
