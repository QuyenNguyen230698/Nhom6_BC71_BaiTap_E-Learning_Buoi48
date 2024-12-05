import React, { useEffect } from "react";
import CardBanner from "../../components/card/CardBanner";
import { useDispatch } from "react-redux";
import { turnOnLoading } from "../../redux/loadingSlice";

export default function InfoPage() {

  return (
    <div className="flex flex-col gap-10 ">
      <CardBanner />
      <div className="flex flex-col lg:flex-row gap-10 items-center h-full justify-center w-full overflow-hidden container mx-auto py-10">
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
        <div className="lg:w-1/2 w-full h-96">
          <img 
            src="https://demo2.cybersoft.edu.vn/static/media/hero-flex.553afb64.png "
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
