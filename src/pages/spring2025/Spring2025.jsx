import React from "react";
import CardBanner from "../../components/card/CardBanner";

export default function Spring2025() {
  const dataBanner = {
    title: 'Chúc mừng năm mới',
    subTitle: 'Khai Xuân Đón Lộc - CODE Thăng Hoa',
    description: '',
    img: 'https://res.cloudinary.com/dmd3qqgum/image/upload/v1736044683/att.-wy_QJ6zHSeZmtwBP_mxpJaMNqyvsLWb_pUt-ene_kg_njtscb.jpg'
  };

  const sections = [
    {
      title: "Mùa xuân khởi đầu thành công – Vươn xa cùng V-LEARNING!",
      subTitle: "Lời tri ân sâu sắc",
      text: " với thật nhiều hy vọng và niềm vui! V-Learning xin gửi lời tri ân sâu sắc đến các học viên và giảng viên đã đồng hành cùng chúng tôi trong suốt chặng đường vừa qua. Năm mới là thời điểm để bắt đầu những hành trình học tập mới, vượt qua mọi giới hạn và hướng tới thành công. V-Learning hy vọng mỗi khóa học sẽ là một món quà tri thức quý giá, giúp bạn tiến gần hơn tới ước mơ của mình. Hãy bắt đầu ngay hôm nay, bởi tương lai là kết quả của hành động ngày hôm nay!",
      img: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1736007704/DALL_E_2025-01-04_23.09.55_-_Design_a_creative_unique_and_artistic_banner_for_the_Vietnamese_Lunar_New_Year_2025_Year_of_the_Snake_themed_for_an_e-learning_platform_titled_V-_x3o4ah.webp",
      order: "order-2 lg:order-1"
    },
    {
      title: "Tết tri thức, khai xuân khởi nghiệp!",
      subTitle: "Học Tập Thăng Hoa - Thành Công Rạng Ngời",
      text: "Khuyến khích học viên tận dụng mùa xuân như một cơ hội để đổi mới bản thân, đặt mục tiêu học tập, và khám phá kiến thức trong năm mới. Xuân đến mang niềm vui, học tập mang tương lai. Kêu gọi tinh thần đổi mới, học để phát triển và làm chủ tương lai. Gợi lên cảm giác tự tin, vượt qua mọi thử thách. Thể hiện không khí sôi động của mùa xuân hòa cùng niềm vui học tập.",
      img: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1736007701/DALL_E_2025-01-04_23.09.48_-_A_vibrant_and_artistic_design_for_Te%CC%82%CC%81t_A%CC%82%CC%81t_Ty%CC%A3_2025_featuring_the_theme_V-LEARNING_for_a_web_e-learning_platform._The_image_should_have_a_dynamic_compo_wqjz7v.webp",
      order: "order-1 lg:order-2"
    },
    {
      title: "V-Learning Team",
      subTitle: "Xuân rộn ràng, tri thức ngập tràn!",
      text: "Mùa xuân không chỉ là mùa của sự sống hồi sinh mà còn là mùa của những khởi đầu đầy hứa hẹn. V-Learning tin rằng, mỗi bước học tập trong năm mới sẽ là một cánh cửa mở ra cơ hội phát triển bản thân và sự nghiệp. Xuân sang, ta học. Tri thức là hoa, thành công là quả. V-Learning hy vọng mỗi khóa học sẽ là một món quà tri thức quý giá, giúp bạn tiến gần hơn tới ước mơ của mình. Hãy bắt đầu ngay hôm nay, bởi tương lai là kết quả của hành động ngày hôm nay Học tập giống như trồng cây mùa xuân.",
      img: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1736045485/att.G6bqMfvUW9BQVC0QI9kUu-vo20L33bg-WtAF3qwaE1Q_r0y6my.jpg",
      order: "order-2 lg:order-1"
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <CardBanner dataBanner={dataBanner} />
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col md:flex-row bg-home lg:gap-10 h-full justify-center items-stretch w-full overflow-hidden container mx-auto">
          <div data-aos="fade-right" data-aos-delay="100" className={`flex flex-col gap-3 lg:w-1/2 w-full p-5 ${section.order}`}>
            <h2 className="textTitle text-green-500 uppercase">{section.title}</h2>
            <h1 className="textTitle font-normal text-yellow-500">{section.subTitle}</h1>
            <p className="text-justify textCardTitle text-gray-600 line-clamp-6">{section.text}</p>
          </div>
          <div data-aos="fade-left" data-aos-delay="100" className={`lg:w-1/2 w-full h-72 lg:h-96 ${section.order === "order-2 lg:order-1" ? "order-1 lg:order-2" : "order-2 lg:order-1"}`}>
            <img src={section.img} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      ))}
      <div className="w-full bg-home max-w-4xl mx-auto container px-4">
        <p data-aos="fade-up" data-aos-delay="100" className="text-justify text-xl pb-12 italic">
        Kính chúc quý học viên, giảng viên và đối tác một năm mới an khang thịnh vượng, học tập thành công và gặt hái thật nhiều thành quả. Hãy để V-Learning là người bạn đồng hành trong hành trình chinh phục tri thức của bạn!
        </p>
      </div>
    </div>
  );
}
