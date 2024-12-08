import React from "react";

export default function CardUser() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 ">
      <div
        data-aos="fade-left"
        data-aos-delay="100"
        className="flex flex-col gap-3 lg:w-1/2 w-full p-5"
      >
        <h2 className="textTitle text-yellow-500 uppercase">
          Nhận xét của học viên về V-learning
        </h2>
        <p className="text-justify textCardTitle text-gray-600">
          Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình
          từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh
          chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và
          giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn.
        </p>
        <p>HÀ DEV</p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="100"
        className="lg:w-1/2 w-full h-96 order-1 lg:order-2 rounded-md overflow-hidden"
      >
        <img
          src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733651992/att.jxiIutFRyEKPumzZ8UdhB7TLzRHyadsxncoPB-kMQao_f6jaqx.jpg"
          alt=""
          className="w-full h-full object-cover bg-transparent"
        />
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="100"
        className="flex flex-col gap-3 lg:w-1/2 w-full p-5"
      >
        <p>QUYỀN DEV</p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="100"
        className="lg:w-1/2 w-full h-96 order-1 lg:order-2 rounded-md overflow-hidden"
      >
        <img
          src="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-happy-graduation-cute-boy-wearing-glasses-with-cap-and-gown-kawaii-png-image_12469814.png"
          alt=""
          className="w-full h-full object-contain bg-[#944039]"
        />
      </div>
    </div>
  );
}
