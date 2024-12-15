import React, { useEffect, useState } from 'react'
import { adminService, VlearningService } from '../../../services/Vlearning'
import { turnOffLoading } from '../../redux/loadingSlice'
import { useNavigate, useParams } from 'react-router-dom'
import CardBanner from '../../components/card/CardBanner'
import CardCourse from '../../components/card/CardCourse'
import { useDispatch } from 'react-redux'
import { message } from 'antd'

export default function ClassDetail() {
    const {maKhoaHoc} = useParams()
    const [course, setCourse] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const dataBanner = {
        title: course.tenKhoaHoc,
        subTitle: '"Bạn không cần hoàn hảo để bắt đầu, nhưng cần bắt đầu để hoàn hảo."',
        description: 'Học đi đôi với hành',
        img: 'https://websitechuyennghiep.vn/data/images/lap-trinh-web-la-gi-cac-buoc-lap-trinh-web-co-ban.jpeg'
    }

    const registerCourseUser = () => {
        let dataUser = JSON.parse(localStorage.getItem("DATA_USER"));
        if (!dataUser) {
            message.warning("Vui lòng đăng nhập để sử dụng chức năng này");
            navigate("/login");
          }
        const formData = JSON.stringify({
            maKhoaHoc: maKhoaHoc,
            taiKhoan: dataUser.taiKhoan
          });
          adminService.registerCourse(formData).then((result) => {
            message.success("Đăng ký khóa học thành công")
            dispatch(turnOffLoading())
          }).catch((err) => {
            console.log(err)
            dispatch(turnOffLoading())
            message.error("Bạn đã đăng ký khóa học này rồi")
          });
    }

    useEffect(() => {
        VlearningService.getCourseProduct(maKhoaHoc).then((result) => {
            setCourse(result.data)
            dispatch(turnOffLoading())
        }).catch((err) => {
            dispatch(turnOffLoading())
        });
    }, [maKhoaHoc])
  return (
    <div>
      <CardBanner dataBanner={dataBanner}/>
      <div className='flex flex-col w-full h-full bg-home'>
        <div data-aos="fade-up" data-aos-delay="100" className='w-full flex flex-col items-start justify-center h-full py-10 my-10 bg-yellow-500'>
            <div className='w-full max-w-6xl container mx-auto '>
            <h2 className='text-2xl lg:text-4xl text-white font-light text-black-gray uppercase'>Thông tin khóa học {course.tenKhoaHoc}</h2>
            <p className='text-black-gray text-lg text-white uppercase'>“Mở lối thành công – Định hình tương lai cùng lập trình đẳng cấp.”</p>
            </div>
        </div>
        <div className='grid grid-cols-12 w-full justify-stretch container mx-auto'>
            {/* left */}
            <div className='col-span-12 md:col-span-6 lg:col-span-8 w-full flex flex-col'>
                <h2 data-aos="fade-up" data-aos-delay="100" className='text-black-gray uppercase font-bold text-2xl lg:text-4xl py-6'>{course.tenKhoaHoc}</h2>
                <div data-aos="fade-up" data-aos-delay="100" className='w-full flex justify-evenly py-6'>
                    <div className='flex gap-2 w-full justify-start items-center'>
                    <img src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923529/6_av2opv.jpg" className='w-10 h-10 rounded-full object-cover object-center ' alt="" />
                        <div className='flex flex-col w-fit'>
                            <p className='text-gray-500 text-base lg:text-lg'>Giảng viên</p>
                            <h3 className='text-black-gray font-bold text-base lg:text-lg'>Trần Quang Sỹ</h3>
                        </div>
                    </div>
                    <div className='flex gap-2 w-full justify-stretch items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-10">
                    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                    <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                    </svg>
                        <div className='flex flex-col w-fit'>
                            <p className='text-gray-500'>Lĩnh vực</p>
                            <h3 className='text-black-gray font-bold'>Lập trình Backend</h3>
                        </div>
                    </div>
                    <div className='flex flex-col w-fit justify-stretch items-center'>
                        <div className='flex items-center gap-2'>
                        <h3 className='text-nowrap font-bold text-black-gray'>5</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="yellow" className="size-6">
                        <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <h3 className='text-nowrap text-black-gray font-bold'>100 đánh giá</h3>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className='w-full flex justify-evenly py-2'>
                    <div className='flex gap-2 w-full justify-start items-center'>
                    <img src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1733923492/1_c46vi1.jpg" className='w-10 h-10 rounded-full object-cover object-center ' alt="" />
                        <div className='flex flex-col w-fit'>
                            <p className='text-gray-500 text-base lg:text-lg'>Mentor</p>
                            <h3 className='text-black-gray font-bold text-base lg:text-lg'>Đỗ Văn Phúc</h3>
                        </div>
                    </div>
                    <div className='flex gap-2 w-full justify-stretch items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-8">
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                    </svg>
                        <div className='flex flex-col w-fit'>
                            <p className='text-gray-500'>Lĩnh vực</p>
                            <h3 className='text-black-gray font-bold'>Lập trình Frontend</h3>
                        </div>
                    </div>
                    <div className='flex flex-col w-fit justify-stretch items-center'>
                        <div className='flex items-center gap-2'>
                        <h3 className='text-nowrap font-bold text-black-gray'>4</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="yellow" className="size-6">
                        <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <h3 className='text-nowrap text-black-gray font-bold'>50 đánh giá</h3>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className='w-full text-justify py-6 border-b border-black'>
                    <p className='textSearch text-black-gray'>React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà phát triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan trọng!</p>
                </div>
                <div className='flex flex-col w-full h-full py-6'>
                    <h2 data-aos="fade-up" data-aos-delay="100" className='text-black-gray text-lg lg:text-xl font-bold py-2'>Những gì bạn sẽ học</h2>
                    <div className='flex flex-col lg:flex-row w-full h-full justify-stretch items-start gap-6'>
                        <div data-aos="fade-up" data-aos-delay="100" className=' w-full lg:w-1/2 text-justify h-auto items-start'>
                            <div className='flex items-center gap-2 w-full'>
                            <p className='w-fit text-black-gray text-sm lg:text-base text-justify'>Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với người dùng và phản ứng nhanh</p>
                            </div>
                            <p className='flex items-center gap-2'>
                             
                            <span className='text-black-gray text-sm lg:text-base'>Đăng ký công việc được trả lương cao hoặc làm freelancer trong một trong những lĩnh vực được yêu cầu nhiều nhất mà bạn có thể tìm thấy trong web dev ngay bây giờ</span>
                            </p>
                            <p className='flex items-center gap-2'>
                             
                            <span className='text-black-gray text-sm lg:text-base'>Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng sức mạnh của JavaScript một cách dễ dàng</span>
                            </p>
                            <p className='flex items-center gap-2'>
                             
                            <span className='text-black-gray text-sm lg:text-base'>Tìm hiểu tất cả về React Hooks và React Components</span>
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="100" className=' w-full lg:w-1/2 text-justify h-auto items-start'>
                            <p className='flex items-center gap-2'>
                                <span className='text-black-gray text-sm lg:text-base'>Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp Javascript NPM, Webpack, Babel và ES6 / ES2015</span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <span className='text-black-gray text-sm lg:text-base'>Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết hợp</span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <span className='text-black-gray text-sm lg:text-base'>Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản</span>
                            </p>
                            <p className='flex items-center gap-2'>
                                <span className='text-black-gray text-sm lg:text-base'>Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng dụng Redux</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full h-full py-6'>
                    <h2 data-aos="fade-up" data-aos-delay="100" className='text-black-gray text-lg lg:text-xl font-bold py-2'>Nội dung khóa học</h2>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col w-full h-full items-start justify-center py-6 gap-3'>
                        <h2 className='text-black-gray text-lg lg:text-xl font-bold w-full py-2 bg-teal-100'>Mục 1: Giới thiệu</h2>
                        <p className='text-black-gray text-base lg:text-lg font-bold'>Bài học</p>
                        <div className='flex justify-between w-full border-b border-yellow-400'>
                            <div className='flex items-center gap-1'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                                </svg></span>
                                <span className='text-gray-500 text-base lg:text-lg'>Các khái niệm về React Component</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                </svg>
                                </span>
                                <span className='text-gray-500 text-base lg:text-lg'>14:35</span>
                            </div>
                        </div>
                        <div className='flex justify-between w-full border-b border-yellow-400'>
                            <div className='flex items-center gap-1'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                                </svg></span>
                                <span className='text-gray-500 text-base lg:text-lg'>Thiết lập môi trường cho Windows</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                </svg>
                                </span>
                                <span className='text-gray-500 text-base lg:text-lg'>14:35</span>
                            </div>
                        </div>
                        <div className='flex justify-between w-full border-b border-yellow-400'>
                            <div className='flex items-center gap-1'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                                </svg></span>
                                <span className='text-gray-500 text-base lg:text-lg'>Tạo ứng dụng React - React-Scripts</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                </svg>
                                </span>
                                <span className='text-gray-500 text-base lg:text-lg'>14:35</span>
                            </div>
                        </div>
                        <div className='flex justify-between w-full border-b border-yellow-400'>
                            <div className='flex items-center gap-1'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                                </svg></span>
                                <span className='text-gray-500 text-base lg:text-lg'>Ghi chú nhanh về dấu ngoặc kép cho string interpolation</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                </svg>
                                </span>
                                <span className='text-gray-500 text-base lg:text-lg'>14:35</span>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col w-full h-full items-start justify-center py-6 gap-3'>
                            <h2 className='text-black-gray text-lg lg:text-xl font-bold w-full py-2 bg-teal-100'>Mục 2: Kiến thức căn bản</h2>
                            <p className='text-black-gray text-base lg:text-lg font-bold'>Bài học</p>
                            <div className='flex justify-between w-full border-b border-yellow-400'>
                                <div className='flex items-center gap-1'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                                    </svg></span>
                                    <span className='text-gray-500 text-base lg:text-lg'>Trang chủ và thành phần thư mục</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                    </svg>
                                    </span>
                                    <span className='text-gray-500 text-base lg:text-lg'>14:35</span>
                                </div>
                            </div>
                            <div className='flex justify-between w-full border-b border-yellow-400'>
                                <div className='flex items-center gap-1'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                                    </svg></span>
                                    <span className='text-gray-500 text-base lg:text-lg'>Hướng dẫn khóa học + Liên kết Github</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                    </svg>
                                    </span>
                                    <span className='text-gray-500 text-base lg:text-lg'>14:35</span>
                                </div>
                            </div>
                            <div className='flex justify-between w-full border-b border-yellow-400'>
                                <div className='flex items-center gap-1'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                                    </svg></span>
                                    <span className='text-gray-500 text-base lg:text-lg'>Trang chủ thương mại điện tử + thiết lập SASS</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                    </svg>
                                    </span>
                                    <span className='text-gray-500 text-base lg:text-lg'>14:35</span>
                                </div>
                            </div>
                            <div className='flex justify-between w-full border-b border-yellow-400'>
                                <div className='flex items-center gap-1'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                                    </svg></span>
                                    <span className='text-gray-500 text-base lg:text-lg'>Tệp CSS và SCSS</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                    </svg>
                                    </span>
                                    <span className='text-gray-500 text-base lg:text-lg'>14:35</span>
                                </div>
                            </div>
                            <div className='flex justify-between w-full border-b border-yellow-400'>
                                <div className='flex items-center gap-1'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                                    </svg></span>
                                    <span className='text-gray-500 text-base lg:text-lg'>React 17: Cập nhật các gói + Phiên bản React mới nhất</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                    </svg>
                                    </span>
                                    <span className='text-gray-500 text-base lg:text-lg'>14:35</span>
                                </div>
                            </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col w-full h-full items-start justify-center py-6 gap-3'>
                        <h2 className='text-black-gray text-lg lg:text-xl font-bold w-full py-2 bg-teal-100'>Mục 3: Kiến thức chuyên sâu</h2>
                        <p className='text-black-gray text-base lg:text-lg font-bold'>Bài học</p>
                        <div className='flex justify-between w-full border-b border-yellow-400'>
                            <div className='flex items-center gap-1'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                                </svg></span>
                                <span className='text-gray-500 text-base lg:text-lg'>connect() and mapStateToProps</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                </svg>
                                </span>
                                <span className='text-gray-500 text-base lg:text-lg'>14:35</span>
                            </div>
                        </div>
                        <div className='flex justify-between w-full border-b border-yellow-400'>
                            <div className='flex items-center gap-1'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                                </svg></span>
                                <span className='text-gray-500 text-base lg:text-lg'>Trạng thái thư mục vào Redux</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                </svg>
                                </span>
                                <span className='text-gray-500 text-base lg:text-lg'>14:35</span>
                            </div>
                        </div>
                        <div className='flex justify-between w-full border-b border-yellow-400'>
                            <div className='flex items-center gap-1'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                                </svg></span>
                                <span className='text-gray-500 text-base lg:text-lg'>Thành phần Tổng quan về Bộ sưu tập</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                </svg>
                                </span>
                                <span className='text-gray-500 text-base lg:text-lg'>14:35</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* right */}
            <div data-aos="fade-up" data-aos-delay="100" className='col-span-12 md:col-span-6 lg:col-span-4 w-full'>
                <div className='md:ml-6 flex flex-col h-fit w-full p-2 shadow-xl gap-2'>
                    <img src={course.hinhAnh} alt="" className='w-full h-full object-cover'/>
                    <div className='flex flex-row w-full items-center justify-between border-b border-gray-400 py-4'>
                        <p className='text-black-gray text-lg'>Ghi danh: <span className='font-bold text-black-gray text-lg'>10 học viên</span></p>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                        </span>
                    </div>
                    <div className='flex flex-row w-full items-center justify-between border-b border-gray-400 py-4'>
                        <p className='text-black-gray text-lg'>Thời gian:  <span className='font-bold text-black-gray text-lg'>18 giờ</span></p>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        </span>
                    </div>
                    <div className='flex flex-row w-full items-center justify-between border-b border-gray-400 py-4'>
                        <p className='text-black-gray text-lg'>Bài học: <span className='font-bold text-black-gray text-lg'>10</span></p>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                        </svg>
                        </span>
                    </div>
                    <div className='flex flex-row w-full items-center justify-between border-b border-gray-400 py-4'>
                        <p className='text-black-gray text-lg'>Video: <span className='font-bold text-black-gray text-lg'>14</span></p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                        </svg>
                    </div>
                    <div className='flex flex-row w-full items-center justify-between border-b border-gray-400 py-4'>
                        <p className='text-black-gray text-lg'>Trình độ: <span className='font-bold text-black-gray text-lg'>Người mới bắt đầu</span></p>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                        </span>
                    </div>
                    <div className='w-full'>
                        <button onClick={registerCourseUser} className='w-full btnLVT'>Ghi danh ngay</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <CardCourse/>
    </div>
  )
}
