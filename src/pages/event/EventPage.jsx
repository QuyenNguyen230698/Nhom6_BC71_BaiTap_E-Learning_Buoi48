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
      <div className="flex flex-col lg:flex-row lg:gap-10 h-full justify-center items-stretch w-full overflow-hidden container mx-auto lg:py-10">
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="flex flex-col gap-3 lg:w-1/2 w-full p-5 order-2 lg:order-1 leading-none"
        >
          <h2 className="textTitle text-green-500 uppercase">
            Sự kiện công nghệ dành cho startup
          </h2>
          <h1 className="textSubBanner font-normal text-yellow-500">
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
          className="lg:w-1/2 w-full h-96 order-1 lg:order-2"
        >
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733644168/1_isuj17.png "
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div>
        <h1 className="text-center text-3xl text-yellow-400 font-bold ">Các nhà đồng sáng tạo</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 md:grid-cols-2 md:px-16">
          <div>
          <img className="w-40 h-40 bg-contain"
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923492/1_c46vi1.jpg"
            alt=""
          />
          </div>
          <h2 className="text-lg font-bold text-white">Nguyễn Nhật</h2>
          <p className="text-sm font-bold text-white">Ceo TechViet Production</p>
        </div>

        <div className="bg-white p-4 text-center rounded-lg">
          <div>
          <img className="w-40 h-40 bg-contain"
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923497/2_ji8j7j.jpg"
            alt=""
          />
          </div>
          <h2 className="text-lg font-bold text-white">Nguyễn Nhật Nam</h2>
          <p className="text-lg text-white font-bold">Ceo TechViet Production</p>
        </div>

        <div>
        <div className="flex flex-col w-full h-full col-span-2 lg:col-span-1 gap-1">
        <img className="w-40 h-40 rounded-xl overflow-hidden "
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923507/3_kw3po9.jpg"
            alt=""
          />
        </div> 
          <h2 className="text-center lg:text-2xl uppercase font-bold">Nguyễn Nam</h2>
          <p >Ceo TechViet Production</p>
        </div>

        <div>
          <div>
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923511/4_l3o8xh.jpg"
            alt=""
          />
          </div>
          <h2>Jhonny Đặng</h2>
          <p>Ceo TechViet Production</p>
        </div>

        <div>
          <div>
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923514/5_wocfie.jpg"
            alt=""
          />
          </div>
          <h2>Ngô Henry</h2>
          <p>Ceo TechViet Production</p>
        </div>

        <div>
          <div>
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923529/6_av2opv.jpg"
            alt=""
          />
          </div>
          <h2>Vương Phạm Vn</h2>
          <p>Ceo TechViet Production</p>
        </div>

        <div>
          <div>
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923534/7_phjkmn.jpg"
            alt=""
          />
          </div>
          <h2>Rober Imacu</h2>
          <p>Ceo TechViet Production</p>
        </div>

        <div>
          <div>
          <img className="w-40 h-40 bg-contain"
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923538/8_lpvpy4.jpg"
            alt=""
          />
          </div>
          <h2>Khoa Pug</h2>
          <p>Ceo TechViet Production</p>
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
