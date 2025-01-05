import React from "react";

export default function CardInfoClass() {
  return (
    <div className="py-10 grid grid-cols-3 w-full h-full gap-3 container mx-auto bg-home">
      <div data-aos="fade-up" data-aos-delay="100" className="col-span-3 lg:col-span-1 w-full bg-teal-400 text-white h-full p-3 rounded-md">
        <h3 className="font-bold text-2xl uppercase ">Khóa học</h3>
        <p>
        Học qua dự án thực tế, học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay
          vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài
          thực tế để học viên học xong làm được ngay
        </p>
        <p className="font-light text-base">
          Hơn 1000 bài tập và dự án thực tế
        </p>
        <p className="font-light text-base">Công nghệ cập nhật mới nhất</p>
        <p className="font-light text-base">
          Hình ảnh, ví dụ, bài giảng sinh động trực quan
        </p>
        <p className="font-light text-base">
          Tư duy phân tích, giải quyết vấn đề trong dự án
        </p>
        <p className="font-light text-base">
          Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án
        </p>
        <p className="font-light text-base">
          Cơ hội thực tập tại các công ty lớn như FPT, Microsoft
        </p>
      </div>

      <div className="col-span-3 lg:col-span-1 w-full text-white flex flex-col gap-5 ">
        <div data-aos="fade-up" data-aos-delay="100" className="bg-yellow-500 h-full p-3 rounded-md">
          <h3  className="font-bold text-2xl uppercase ">Lộ trình phù hợp</h3>
          <p className="font-light text-base">
            {" "}
            Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao
          </p>
          <p className="font-light text-base">
            Học, luyện tập code, kỹ thuật phân tích, soft skill
          </p>
          <p className="font-light text-base">
            Huấn luyện để phát triển năng lực và niềm đam mê lập trình
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className="bg-yellow-500 h-full p-3 rounded-md">
          <h3 className="font-bold text-2xl uppercase ">Giảng viên</h3>
          <p className="font-light text-base">
            Tương tác cùng mentor và giảng viên qua phần thảo luận
          </p>
          <p className="font-light text-base">
            Review code và đưa ra các nhận xét góp ý
          </p>
          <p className="font-light text-base">
            Chấm điểm tương tác thảo luận giữa các học viên
          </p>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-1 w-full flex flex-col gap-5">
        <div data-aos="fade-up" data-aos-delay="100" className="bg-gray-500 text-white h-full p-3 rounded-md">
          <h3 className="font-bold text-2xl uppercase ">Hệ thống học tập</h3>
          <p className="font-light text-base">
            Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học
            viên
          </p>
          <p className="font-light text-base">
            Thống kê lượt xem video, làm bài, điểm số theo chu kỳ
          </p>
          <p className="font-light text-base">
            Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra
            mục tiêu học tập
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className="bg-teal-400 text-white h-full p-3 rounded-md">
          <h3 className="font-bold text-2xl uppercase ">Chứng nhận</h3>
          <p className="font-light text-base">
            Chấm bài và có thể vấn đáp trực tuyến để review
          </p>
          <p className="font-light text-base">
            Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo
          </p>
          <p className="font-light text-base">
            Kết nối CV của bạn đến với các đối tác của V learning
          </p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="100" className="col-span-4 w-full bg-black-gray mt-4" style={{ height: "1px" }}></div>
    </div>
  );
}
