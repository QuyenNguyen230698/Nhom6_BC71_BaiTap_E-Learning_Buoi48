import React from "react";
import CardBanner from "../../components/card/CardBanner";

export default function InfoPage() {
  const dataBanner = {
    title: 'V-learning',
    subTitle: '"Sự khác biệt giữa giấc mơ và thành công là hành động."',
    description: 'Học đi đôi với hành',
    img: 'https://demo2.cybersoft.edu.vn/static/media/bgAbout.19ac825c.png'
  };

  const sections = [
    {
      title: "V-learning ?",
      subTitle: "Nơi hội tụ kiến thức",
      text: "Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để hỗ trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được xây dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của một lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ toàn diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một lớp học trực tuyến thú vị và hấp dẫn.",
      img: "https://demo2.cybersoft.edu.vn/static/media/hero-flex.553afb64.png",
      order: "order-2 lg:order-1"
    },
    {
      title: "Chương trình học V-learning",
      subTitle: "Hệ thống học hàng đầu",
      text: "Giảng viên đều là các chuyên viên thiết kế đồ họa và giảng viên của các trường đại học danh tiếng trong thành phố: Đại học CNTT, KHTN, Bách Khoa,…Trang thiết bị phục vụ học tập đầy đủ, phòng học máy lạnh, màn hình LCD, máy cấu hình mạnh, mỗi học viên thực hành trên một máy riêng.100% các buổi học đều là thực hành trên máy tính. Đào tạo với tiêu chí: “học để làm được việc”, mang lại cho học viên những kiến thức hữu ích nhất, sát với thực tế nhất.",
      img: "https://demo2.cybersoft.edu.vn/static/media/education-hero.62147e5c.png",
      order: "order-1 lg:order-2"
    },
    {
      title: "Tầm nhìn V-learning",
      subTitle: "Đào tạo lập trình chuyên sâu",
      text: "Trở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng đầu khu vực, cung cấp nhân lực có tay nghề cao, chuyên môn sâu cho sự phát triển công nghiệp phần mềm trong thời đại công nghệ số hiện nay, góp phần giúp sự phát triển của xã hội, đưa Việt Nam thành cường quốc về phát triển phần mềm.giúp người học phát triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.",
      img: "https://demo2.cybersoft.edu.vn/static/media/olstudy.96378086.png",
      order: "order-2 lg:order-1"
    },
    {
      title: "Sứ mệnh V-learning",
      subTitle: "Phương pháp đào tạo hiện đại",
      text: "Sử dụng các phương pháp đào tạo tiên tiến và hiện đại trên nền tảng công nghệ giáo dục, kết hợp phương pháp truyền thống, phương pháp trực tuyến, lớp học đảo ngược và học tập dựa trên dự án thực tế, phối hợp giữa đội ngũ training nhiều kinh nghiệm và yêu cầu từ các công ty, doanh nghiệp. Qua đó, V-learning giúp người học phát triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.",
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
    </div>
  );
}
