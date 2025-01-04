import React from "react";
import CardBanner from "../../components/card/CardBanner";

export default function Spring2025() {
  const dataBanner = {
    title: 'Chúc mừng năm mới',
    subTitle: 'Học Tập Đúng Xu Hướng - Bứt Phá Mọi Giới Hạn',
    description: '',
    img: '/img/springBanner2025.webp'
  };

  const sections = [
    {
      title: "",
      subTitle: "Lời tri ân sâu sắc",
      text: " với thật nhiều hy vọng và niềm vui! E-Learning xin gửi lời tri ân sâu sắc đến các học viên và giảng viên đã đồng hành cùng chúng tôi trong suốt chặng đường vừa qua. Năm mới là thời điểm để bắt đầu những hành trình học tập mới, vượt qua mọi giới hạn và hướng tới thành công.",
      img: "https://demo2.cybersoft.edu.vn/static/media/hero-flex.553afb64.png",
      order: "order-2 lg:order-1"
    },
    {
      title: "",
      subTitle: "Học Tập Thăng Hoa - Thành Công Rạng Ngời",
      text: "Khuyến khích học viên tận dụng mùa xuân như một cơ hội để đổi mới bản thân, đặt mục tiêu học tập, và khám phá kiến thức trong năm mới. Xuân đến mang niềm vui, học tập mang tương lai",
      img: "https://demo2.cybersoft.edu.vn/static/media/education-hero.62147e5c.png",
      order: "order-1 lg:order-2"
    },
    {
      title: "",
      subTitle: "Khởi Đầu Mới, Thành Tựu Mới",
      text: "Mùa xuân không chỉ là mùa của sự sống hồi sinh mà còn là mùa của những khởi đầu đầy hứa hẹn. E-Learning tin rằng, mỗi bước học tập trong năm mới sẽ là một cánh cửa mở ra cơ hội phát triển bản thân và sự nghiệp. Xuân sang, ta học. Tri thức là hoa, thành công là quả.",
      img: "https://demo2.cybersoft.edu.vn/static/media/olstudy.96378086.png",
      order: "order-2 lg:order-1"
    },
    {
      title: "",
      subTitle: "E-Learning Team",
      text: "E-Learning hy vọng mỗi khóa học sẽ là một món quà tri thức quý giá, giúp bạn tiến gần hơn tới ước mơ của mình. Hãy bắt đầu ngay hôm nay, bởi tương lai là kết quả của hành động ngày hôm nay Học tập giống như trồng cây mùa xuân. Khi bạn chăm sóc từng ngày, bạn sẽ gặt hái những trái ngọt vào mùa sau.!",
      img: "https://demo2.cybersoft.edu.vn/static/media/students.fc2d9ab7.png",
      order: "order-1 lg:order-2"
    }
  ];

  return (
    <div className="flex flex-col gap-10">
      <CardBanner dataBanner={dataBanner} />
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col lg:flex-row bg-home lg:gap-10 h-full justify-center items-stretch w-full overflow-hidden container mx-auto lg:py-10">
          <div data-aos="fade-right" data-aos-delay="100" className={`flex flex-col gap-3 lg:w-1/2 w-full p-5 ${section.order}`}>
            <h2 className="textTitle text-green-500 uppercase">{section.title}</h2>
            <h1 className="textSubBanner font-normal text-yellow-500">{section.subTitle}</h1>
            <p className="text-justify textCardTitle text-gray-600">{section.text}</p>
          </div>
          <div data-aos="fade-left" data-aos-delay="100" className={`lg:w-1/2 w-full h-96 ${section.order === "order-2 lg:order-1" ? "order-1 lg:order-2" : "order-2 lg:order-1"}`}>
            <img src={section.img} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      ))}
      <div className="w-full max-w-4xl mx-auto container px-4">
        <p className="text-justify text-xl pb-12 italic">
        Kính chúc quý học viên, giảng viên và đối tác một năm mới an khang thịnh vượng, học tập thành công và gặt hái thật nhiều thành quả. Hãy để E-Learning là người bạn đồng hành trong hành trình chinh phục tri thức của bạn!
        </p>
      </div>
    </div>
  );
}
