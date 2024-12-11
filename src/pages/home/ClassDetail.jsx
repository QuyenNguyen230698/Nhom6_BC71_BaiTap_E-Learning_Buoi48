import React, { useEffect, useState } from 'react'
import { VlearningService } from '../../../services/Vlearning'
import { turnOffLoading } from '../../redux/loadingSlice'
import { useParams } from 'react-router-dom'
import CardBanner from '../../components/card/CardBanner'
import CardCourse from '../../components/card/CardCourse'

export default function ClassDetail() {
    const {maKhoaHoc} = useParams()
    const [course, setCourse] = useState([])
    const dataBanner = {
        title: course.tenKhoaHoc,
        img: 'https://websitechuyennghiep.vn/data/images/lap-trinh-web-la-gi-cac-buoc-lap-trinh-web-co-ban.jpeg'
    }

    useEffect(() => {
        VlearningService.getCourseProduct(maKhoaHoc).then((result) => {
            setCourse(result.data)
            turnOffLoading()
        }).catch((err) => {
            turnOffLoading()
        });
    }, [maKhoaHoc])
  return (
    <div>
      <CardBanner dataBanner={dataBanner}/>
      <div className='flex flex-col w-full h-full'>
        <div className='w-full flex flex-col items-start justify-center h-full py-10 my-10 bg-yellow-500'>
            <div className='w-full max-w-6xl container mx-auto '>
            <h2 className='text-2xl lg:text-4xl text-white font-light text-black-gray uppercase'>Thông tin khóa học</h2>
            <p className='text-black-gray text-lg text-white uppercase'>Tiến lên và không chần chừ !!!</p>
            </div>
        </div>
        <div className='grid grid-cols-12 w-full container mx-auto'>
            <div className='col-span-12 md:col-span-6 lg:col-span-8 w-full flex flex-col'>
                <h2>LẬP TRÌNH FRONT-END CHUYÊN NGHIỆP</h2>
                <div className='w-full flex justify-evenly gap-4'>
                    <div className='flex w-full justify-stretch items-start'>
                        <img src="" alt="" />
                        <div className='flex flex-col w-fit'>
                            <p>Giảng viên</p>
                            <h3>Robert Ngô Ngọc</h3>
                        </div>
                    </div>
                    <div className='flex w-full justify-stretch items-center'>
                        <img src="" alt="" />
                        <div className='flex flex-col w-fit'>
                            <p>Lĩnh vực</p>
                            <h3>Lập trình Backend</h3>
                        </div>
                    </div>
                    <div className='flex flex-col w-fit items-end'>
                        <p>icon</p>
                        <h3 className='text-nowrap'>100 đánh giá</h3>
                    </div>
                </div>
                <div className='w-full text-justify'>
                    <p>React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà phát triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan trọng!</p>
                </div>
                <div className='flex flex-col w-full'>
                    <h2>Những gì bạn sẽ học</h2>
                    <div className='grid grid-col-4 w-full h-full justify-stretch'>
                        <div className='col-span-2 w-full text-justify'>Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với người dùng và phản ứng nhanh</div>
                        <div className='col-span-2 w-full text-justify'>Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp Javascript NPM, Webpack, Babel và ES6 / ES2015</div>
                    </div>
                </div>
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-4 w-full'>test2</div>
        </div>
      </div>
      <CardCourse/>
    </div>
  )
}
