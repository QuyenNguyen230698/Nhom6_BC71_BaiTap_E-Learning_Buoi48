import React from "react";
import CardBanner from "../../components/card/CardBanner";

const ImageCard = ({ src, alt, title }) => (
  <div className="flex flex-col w-full h-full col-span-2 lg:col-span-1 gap-1">
    <div className="w-full h-full rounded-xl overflow-hidden">
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </div>
    <h3 className="text-center text-base leading-normal lg:text-2xl uppercase font-bold">
      {title}
    </h3>
  </div>
);

const SpeakerCard = ({ imgSrc, name, title }) => (
  <div className="lg:w-1/4 flex flex-col items-start w-full p-4">
    <img src={imgSrc} alt={name} />
    <h2 className="uppercase text-white font-bold">{name}</h2>
    <p className="uppercase text-white">{title}</p>
  </div>
);

const BrandImage = ({ src }) => (
  <div className="flex flex-wrap justify-between gap-4 p-2">
    <img className="w-36 h-auto bg-contain" src={src} alt="" />
  </div>
);

export default function Event() {
  const dataBanner = {
    title: 'Sự kiện công nghệ lớn nhất 2025',
    subTitle: '01 tháng 01, 2025, Việt Nam',
    description: 'Học đi đôi với hành',
    img: 'https://res.cloudinary.com/dmd3qqgum/image/upload/v1733644310/backroundTech_kaznk9.jpg'
  };

  const brandImages = [
    "/img/brand1.png",
    "/img/brand2.png",
    "/img/brand3.avif",
    "/img/brand4.avif",
    "/img/brand5.avif",
    "/img/brand6.avif",
    "/img/brand7.avif",
    "/img/brand8.png"
  ];

  const speakers = [
    { imgSrc: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923492/1_c46vi1.jpg", name: "Nguyễn Nhật", title: "Ceo TechViet Production" },
    { imgSrc: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923497/2_ji8j7j.jpg", name: "Nguyễn Nhật Nam", title: "Ceo TechViet Production" },
    { imgSrc: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923507/3_kw3po9.jpg", name: "Nguyễn Nam", title: "Ceo TechViet Production" },
    { imgSrc: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923511/4_l3o8xh.jpg", name: "Jhonny Đặng", title: "Ceo TechViet Production" },
    { imgSrc: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923514/5_wocfie.jpg", name: "Ngô Henry", title: "Ceo TechViet Production" },
    { imgSrc: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923529/6_av2opv.jpg", name: "Vương Phạm Vn", title: "Ceo TechViet Production" },
    { imgSrc: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923534/7_phjkmn.jpg", name: "Rober Imacu", title: "Ceo TechViet Production" },
    { imgSrc: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923538/8_lpvpy4.jpg", name: "Khoa Pug", title: "Ceo TechViet Production" }
  ];

  const imageCards = [
    { src: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1733645823/4_tzmokd.jpg", title: "FACEBOOK" },
    { src: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1733645791/5_kp5vvf.jpg", title: "Microsoft" },
    { src: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1733645798/6_w9xaxd.jpg", title: "Google" },
    { src: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1733645803/7_e7y3so.jpg", title: "Amazon" }
  ];

  return (
    <div className="flex flex-col w-full h-full bg-white">
      <CardBanner dataBanner={dataBanner} />
      <div className="flex flex-col bg-home lg:flex-row lg:gap-10 h-full justify-center items-stretch w-full overflow-hidden container mx-auto lg:py-20">
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
          className="lg:w-1/2 w-full h-96 order-1 lg:order-2 lg:animate-bounce"
        >
          <img
            src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733644168/1_isuj17.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="100" className="lg:py-20">
        <div className="flex flex-wrap h-full justify-center items-center w-full overflow-hidden py-6 px-4 bg-gray-600">
          {brandImages.map((src, index) => (
            <BrandImage key={index} src={src} />
          ))}
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex flex-wrap h-full justify-stretch items-stretch w-full overflow-hidden mx-auto py-10"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dmd3qqgum/image/upload/v1734246220/1_fea7tu.jpg')`,
        }}
      >
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="grid grid-cols-4 bg-home w-full h-full items-stretch justify-stretch container mx-auto gap-5 px-3 py-10"
      >
        {imageCards.map((card, index) => (
          <ImageCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

