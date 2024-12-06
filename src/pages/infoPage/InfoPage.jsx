import React, { useEffect } from "react";
import CardBanner from "../../components/card/CardBanner";
import { useDispatch } from "react-redux";
import { turnOnLoading } from "../../redux/loadingSlice";

export default function InfoPage() {

  return (
    <div className="flex flex-col gap-10 ">
      <CardBanner />
      <div className="flex flex-col lg:flex-row lg:gap-10 h-full justify-center items-stretch w-full overflow-hidden container mx-auto lg:py-10">
        <div className="flex flex-col gap-3 lg:w-1/2 w-full p-5 order-2 lg:order-1 leading-none">
          <h2 className="textTitle text-green-500 uppercase">V-learning ?</h2>
          <h1 className="textSubBanner font-normal text-black">Nơi hội tụ kiến thức</h1>
          <p className="text-justify textCardTitle text-gray-600">
            Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để hỗ
            trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được xây
            dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của một
            lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ toàn
            diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một lớp học
            trực tuyến thú vị và hấp dẫn.
          </p>
        </div>
        <div className="lg:w-1/2 w-full h-96 order-1 lg:order-2">
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/hero-flex.553afb64.png "
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-10 h-full justify-center items-stretch w-full overflow-hidden container mx-auto lg:py-10">
        <div className="lg:w-1/2 w-full h-96">
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/education-hero.62147e5c.png "
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-3 lg:w-1/2 w-full p-5">
          <h2 className="textTitle text-green-500 uppercase">
            Chương trình học V-learning
          </h2>
          <h1 className="textSubBanner font-normal text-black">Hệ thống học hàng đầu</h1>
          <p className="text-justify textCardTitle text-gray-600">
            Giảng viên đều là các chuyên viên thiết kế đồ họa và giảng viên của
            các trường đại học danh tiếng trong thành phố: Đại học CNTT, KHTN,
            Bách Khoa,…Trang thiết bị phục vụ học tập đầy đủ, phòng học máy
            lạnh, màn hình LCD, máy cấu hình mạnh, mỗi học viên thực hành trên
            một máy riêng.100% các buổi học đều là thực hành trên máy tính. Đào
            tạo với tiêu chí: “học để làm được việc”, mang lại cho học viên
            những kiến thức hữu ích nhất, sát với thực tế nhất.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-10 h-full justify-center items-stretch w-full overflow-hidden container mx-auto lg:py-10">
        <div className="flex flex-col gap-3 lg:w-1/2 w-full p-5 order-2 lg:order-1">
          <h2 className="textTitle text-green-500 uppercase">Tầm nhìn V-learning</h2>
          <h1 className="textSubBanner font-normal text-black">Đào tạo lập trình chuyên sâu</h1>
          <p className="text-justify textCardTitle text-gray-600">
            Trở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng đầu
            khu vực, cung cấp nhân lực có tay nghề cao, chuyên môn sâu cho sự
            phát triển công nghiệp phần mềm trong thời đại công nghệ số hiện
            nay, góp phần giúp sự phát triển của xã hội, đưa Việt Nam thành
            cường quốc về phát triển phần mềm.giúp người học phát triển cả tư
            duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng
            đáp ứng mọi nhu cầu của doanh nghiệp.
          </p>
        </div>
        <div className="lg:w-1/2 w-full h-96 order-1 lg:order-2">
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/olstudy.96378086.png "
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-10 h-full justify-center items-stretch w-full overflow-hidden container mx-auto lg:py-10">
        <div className="lg:w-1/2 w-full h-96">
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/students.fc2d9ab7.png "
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-3 lg:w-1/2 w-full p-5">
          <h2 className="textTitle text-green-500 uppercase">Sứ mệnh V-learning</h2>
          <h1 className="textSubBanner font-normal text-black">Phương pháp đào tạo hiện đại</h1>
          <p className="text-justify textCardTitle text-gray-600">
            Sử dụng các phương pháp đào tạo tiên tiến và hiện đại trên nền tảng
            công nghệ giáo dục, kết hợp phương pháp truyền thống, phương pháp
            trực tuyến, lớp học đảo ngược và học tập dựa trên dự án thực tế,
            phối hợp giữa đội ngũ training nhiều kinh nghiệm và yêu cầu từ các
            công ty, doanh nghiệp. Qua đó, V-learning giúp người học phát triển
            cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn
            sàng đáp ứng mọi nhu cầu của doanh nghiệp.
          </p>
        </div>
      </div>
    </div>
  );
}
