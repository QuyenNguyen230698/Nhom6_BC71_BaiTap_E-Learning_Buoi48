import React from "react";

const cardData = [
  {
    title: "Nhận xét của học viên về V-learning",
    content: "Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn.",
    imgSrc: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1733663652/att.Fk5CEEk1OtlnU3XJTKTHzkVCPk31NA4KFTbpWhtw71Y_xtgg5h.jpg",
    studentName: "HÀ DEV",
    aos: "fade-right",
    order: "order-2 lg:order-1"
  },
  {
    title: "Nhận xét của học viên về V-learning",
    content: "Khóa học rất hữu ích, giúp tôi nắm vững kiến thức cơ bản và áp dụng được vào các dự án thực tế. Giảng viên nhiệt tình, dễ hiểu, và luôn sẵn sàng giải đáp mọi thắc mắc. Tôi cảm thấy tự tin hơn rất nhiều khi bắt đầu sự nghiệp lập trình.",
    imgSrc: "https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-happy-graduation-cute-boy-wearing-glasses-with-cap-and-gown-kawaii-png-image_12469814.png",
    studentName: "Quyền DEV",
    aos: "fade-left",
    order: "order-2 lg:order-2"
  }
];

export default function CardUser() {
  return (
    <div className="flex flex-col w-full h-full justify-stretch gap-5 py-10 px-3 bg-home">
      {cardData.map((card, index) => (
        <div key={index} className="flex flex-col lg:flex-row lg:gap-10 h-full lg:h-96 justify-stretch items-stretch w-full overflow-hidden container mx-auto">
          <div
            data-aos={card.aos}
            data-aos-delay="100"
            className={`flex flex-col gap-3 lg:w-1/2 w-full p-5 ${card.order} leading-none`}
          >
            <h2 className="textTitle text-green-500 uppercase">
              {card.title}
            </h2>
            <p className="text-justify textCardTitle text-black-gray">
              {card.content}
            </p>
          </div>
          <div
            data-aos={card.aos === "fade-right" ? "fade-left" : "fade-right"}
            data-aos-delay="100"
            className={`lg:w-1/2 w-full h-full gap-2 items-center justify-center ${card.order === "order-2 lg:order-1" ? "order-1 lg:order-2" : "order-1 lg:order-1"} flex flex-col`}
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={card.imgSrc}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-black-gray text-base lg:text-sm font-bold italic uppercase">
              Học Viên: {card.studentName}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
