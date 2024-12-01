import React from "react";
import CardBanner from "../../components/card/CardBanner";

export default function InfoPage() {
  return (
    <div>
      <CardBanner />
      <div className="flex flex-col lg:flex-row items-stretch h-96 justify-start w-full">
      
        <div 
        className="flex flex-col lg:w-1/2 w-full">
          <h2>V learning ?</h2>
          <h1>Nơi hội tụ kiến thức</h1>
          <p>
            Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để hỗ
            trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được xây
            dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của một
            lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ toàn
            diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một lớp học
            trực tuyến thú vị và hấp dẫn.
          </p>
        </div>
        <div className="lg:w-1/2 w-full">
          <img className="w-full h-auto object-contain bg-contain"
            src="https://demo2.cybersoft.edu.vn/static/media/hero-flex.553afb64.png "
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
