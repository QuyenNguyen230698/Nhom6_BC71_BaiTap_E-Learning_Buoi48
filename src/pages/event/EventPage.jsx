import React from "react";

export default function event() {
  return (
    <div className="flex flex-col w-full h-full bg-white">
      <div className="w-full h-full relative">
        <img
          className="w-full h-full object-cover "
          src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733644310/backroundTech_kaznk9.jpg"
          alt=""
        />
        <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center">
          <h3 className="text-white textBanner uppercase text-center">
            Sự kiện công nghệ lớn nhất 2024
          </h3>
          <p className="textSubBanner text-center tracking-wide text-white">
            8 tháng 12, 2024, Việt Nam
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-10 h-full justify-center items-stretch w-full overflow-hidden container mx-auto lg:py-20">
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="flex flex-col gap-3 lg:w-1/2 w-full p-5 order-2 lg:order-1 leading-none"
        >
          <h2 className="textTitle text-green-500 uppercase">
            Sự kiện công nghệ dành cho startup
          </h2>
          <h1 className="text-2xl font-bold text-yellow-500">
            Nơi gặp gỡ của những tư tưởng lớn
          </h1>
          <p className="text-justify textCardTitle text-gray-600">
            Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt Nam
            tập trung vào cả bốn mảng tiêu biểu của công nghệ tiên phong, bao
            gồm Artificial Intelligence (trí tuệ nhân tạo), Internet of Things
            (Internet vạn vật), Blockchain (Chuỗi khối) và Augmented
            reality/Virtual Reality (Thực tế tăng cường/Thực tế ảo)
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="lg:w-1/2 w-full h-96 order-1 lg:order-2 lg:animate-bounce "
        >
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733644168/1_isuj17.png "
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="lg:py-20 ">
      <div className=" flex flex-wrap h-full justify-center items-center w-full overflow-hidden py-6 px-4  bg-gray-600 ">
      <div className="flex flex-wrap justify-between gap-4 p-2">
        <img className="w-36 h-auto bg-contain" 
        src="/img/brand1.png" alt="" />
      </div>

      <div className="flex flex-wrap justify-between gap-4 p-2" >
        <img className="w-36 h-auto bg-contain" 
        src="/img/brand2.png" alt="" />
      </div>

      <div className="flex flex-wrap justify-between gap-4 p-2">
        <img className="w-36 h-auto bg-contain"
         src="/img/brand3.avif" alt="" />
      </div>

      <div className="flex flex-wrap justify-between gap-4 p-2">
        <img className="w-36 h-auto bg-contain"
         src="/img/brand4.avif" alt="" />
      </div>

      <div className="flex flex-wrap justify-between gap-4 p-2">
        <img className="w-36 h-auto bg-contain" 
        src="/img/brand5.avif" alt="" />
      </div>

      <div className="flex flex-wrap justify-between gap-4 p-2">
        <img className="w-36 h-auto bg-contain" 
        src="/img/brand6.avif" alt="" />
      </div>

      <div className="flex flex-wrap justify-between gap-4 p-2">
        <img className="w-36 h-auto bg-contain"
        src="/img/brand7.avif" alt="" />
      </div>

      <div className="flex flex-wrap justify-between gap-4 p-2">
      <img className="w-36 h-auto bg-contain"
      src="/img/brand8.png" alt="" />
      </div>

      </div>

      </div> 

      <div
        className="flex flex-wrap h-full justify-stretch items-stretch w-full overflow-hidden mx-auto py-10 "
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dmd3qqgum/image/upload/v1734246220/1_fea7tu.jpg')`,
        }}
      >
        <div className="lg:w-1/4 flex flex-col items-start  w-full p-4 ">
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923492/1_c46vi1.jpg"
            alt=""
          />
          <h2 className="uppercase text-white font-bold">Nguyễn Nhật</h2>
          <p className="uppercase text-white">Ceo TechViet Production</p>
        </div>

        <div className="lg:w-1/4 flex flex-col items-start  w-full p-4">
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923497/2_ji8j7j.jpg"
            alt=""
          />
          <h2 className="uppercase text-white font-bold">Nguyễn Nhật Nam</h2>
          <p className="uppercase text-white">Ceo TechViet Production</p>
        </div>

        <div className="lg:w-1/4 flex flex-col items-start  w-full p-4">
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923507/3_kw3po9.jpg"
            alt=""
          />
          <h2 className="uppercase text-white font-bold">Nguyễn Nam</h2>
          <p className="uppercase text-white">Ceo TechViet Production</p>
        </div>

        <div className="lg:w-1/4 flex flex-col items-start  w-full p-4">
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923511/4_l3o8xh.jpg"
            alt=""
          />
          <h2 className="uppercase text-white font-bold">Jhonny Đặng</h2>
          <p className="uppercase text-white">Ceo TechViet Production</p>
        </div>

        <div className="lg:w-1/4 flex flex-col items-start  w-full p-4">
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923514/5_wocfie.jpg"
            alt=""
          />
          <h2 className="uppercase text-white font-bold">Ngô Henry</h2>
          <p className="uppercase text-white">Ceo TechViet Production</p>
        </div>

        <div className="lg:w-1/4 flex flex-col items-start  w-full p-4">
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923529/6_av2opv.jpg"
            alt=""
          />
          <h2 className="uppercase text-white font-bold">Vương Phạm Vn</h2>
          <p className="uppercase text-white">Ceo TechViet Production</p>
        </div>

        <div className="lg:w-1/4 flex flex-col items-start  w-full p-4">
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923534/7_phjkmn.jpg"
            alt=""
          />
          <h2 className="uppercase text-white font-bold">Rober Imacu</h2>
          <p className="uppercase text-white">Ceo TechViet Production</p>
        </div>

        <div className="lg:w-1/4 flex flex-col items-start  w-full p-4">
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923538/8_lpvpy4.jpg"
            alt=""
          />
          <h2 className="uppercase text-white font-bold">Khoa Pug</h2>
          <p className="uppercase text-white">Ceo TechViet Production</p>
        </div>
      </div>

      <div className="grid grid-cols-4 w-full h-full items-stretch justify-stretch container mx-auto gap-5 px-3 py-10">
        <div className="flex flex-col w-full h-full col-span-2 lg:col-span-1 gap-1">
          <div className="w-full h-full rounded-xl overflow-hidden  ">
            <img
              className="w-full h-full object-cover "
              src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733645823/4_tzmokd.jpg"
              alt=""
            />
          </div>
          <h3 className="text-center text-base leading-normal lg:text-2xl uppercase font-bold">
            FACEBOOK
          </h3>
        </div>

        <div className="flex flex-col w-full h-full col-span-2 lg:col-span-1 gap-1">
          <div className="w-full h-full rounded-xl overflow-hidden ">
            <img
              className="w-full h-full object-cover "
              src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733645791/5_kp5vvf.jpg"
              alt=""
            />
          </div>
          <h3 className="text-center text-base leading-normal lg:text-2xl uppercase font-bold">
            Microsoft
          </h3>
        </div>

        <div className="flex flex-col w-full h-full col-span-2 lg:col-span-1 gap-1">
          <div className="w-full h-full rounded-xl overflow-hidden ">
            <img
              className="w-full h-full object-cover "
              src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733645798/6_w9xaxd.jpg"
              alt=""
            />
          </div>
          <h3 className="text-center text-base leading-normal lg:text-2xl uppercase font-bold">
            Google
          </h3>
        </div>

        <div className="flex flex-col w-full h-full col-span-2 lg:col-span-1 gap-1">
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover "
              src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733645803/7_e7y3so.jpg"
              alt=""
            />
          </div>
          <h3 className="text-center text-base leading-normal lg:text-2xl uppercase font-bold">
            Amazon
          </h3>
        </div>
      </div>
    </div>
  );
}

