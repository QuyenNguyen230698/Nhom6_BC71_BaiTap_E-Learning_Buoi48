import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { VlearningService } from '../../../services/Vlearning';
import { useDispatch } from 'react-redux';
import { turnOffLoading } from '../../redux/loadingSlice';
import CardBanner from '../../components/card/CardBanner';
import CardCourse from '../../components/card/CardCourse';

export default function SearchCourse() {
  const { maDanhMuc } = useParams();
  const [listCourse, setListCourse] = useState([]);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const arrImg = [
    {src:'/img/content1.webp',alt:"Khóa học lập trình"},
    {src:'/img/content2.webp',alt:"Khóa học lập trình"},
    {src:'/img/content3.webp',alt:"Khóa học lập trình"},
    {src:'/img/content4.webp',alt:"Khóa học lập trình"},
]
const dataBanner = {
    "BackEnd":{title:'BackEnd',img: "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2024/05/lap-trinh-web.jpg",subTitle:"“Lập trình đỉnh cao – Chạm tay vào tương lai triệu đô.”"},
    "Design":{title:'Design',img: "https://media.licdn.com/dms/image/D4D12AQE8eKTPZ6S7fQ/article-cover_image-shrink_600_2000/0/1718365066490?e=2147483647&v=beta&t=-TPoVU15S6YHi8zUOridsXRY1ZHP14-2AasDfWfj34Q",subTitle:"“Khai phá tiềm năng – Xây dựng đế chế công nghệ của bạn.”"},
    "DiDong":{title:'Di Động',img: "https://res.cloudinary.com/dmd3qqgum/image/upload/v1733669268/Web-Development_lqmebs.jpg",subTitle:"“Không chỉ học, hãy làm chủ ngôn ngữ của tương lai.”"},
    "FrontEnd":{title:'FrontEnd',img: "https://websitechuyennghiep.vn/data/images/lap-trinh-web-la-gi-cac-buoc-lap-trinh-web-co-ban.jpeg",subTitle:"“Từ số 0 đến siêu coder – Thay đổi cuộc chơi công nghệ.”"},
    "FullStack":{title:'FullStack',img: "https://tuhoclaptrinh.edu.vn/upload/post/2022/07/04/hoc-lap-trinh-can-luu-y-nhung-gi-20220704102621-884273.jpg",subTitle:"“Học lập trình, sống đẳng cấp – Tương lai là của bạn!”"},
    "TuDuy":{title:'Tư Duy',img: "https://swinburne-vn.edu.vn/wp-content/uploads/nganh-lap-trinh-mobile3.jpg",subTitle:"“Thành công không dành cho kẻ lười biếng, chỉ dành cho người kiên định.”"},
}

  useEffect(() => {
    VlearningService.getCourseDetail(maDanhMuc).then(res => {
      setListCourse(res.data);
      setTitle(res.data[0].danhMucKhoaHoc.tenDanhMucKhoaHoc);
      dispatch(turnOffLoading());
    }).catch(err => {
      console.log(err);
    })
  }, [maDanhMuc]);

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <CardBanner dataBanner={dataBanner[maDanhMuc]} />
        <div className='w-full h-full flex flex-col justify-center items-center bg-home py-10 lg:py-20 px-3'>
            <div className='w-full flex justify-center items-center py-4'>
                <h2 data-aos="fade-up" data-aos-delay="100" className='text-2xl lg:text-4xl font-light text-black-gray uppercase pb-5 lg:pb-10'>{title}</h2>
            </div>
        <div className='w-full max-w-7xl h-full container mx-auto grid grid-cols-8 items-center justify-stretch gap-5'>
            {listCourse?.map((course, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay="100" className='w-full h-full leading-none flex flex-col justify-stretch col-span-8 md:col-span-4 lg:col-span-2 shadow-lg rounded-lg overflow-hidden'>
                <div className='w-full h-full'>
                    <img src={arrImg[idx % arrImg.length].src} alt={arrImg[idx % arrImg.length].alt} className='w-full h-full object-cover'/>
                </div>
                <div className='w-full h-fit flex flex-col justify-center text-black-gray p-3 lg:gap-3'>
                    <h3 className='text-2xl lg:text-3xl font-light text-black-gray truncate'>{course.tenKhoaHoc}</h3>
                    <p className='text-sm lg:text-base text-justify text-black-gray py-1'>Lập trình hiện đang là xu hướng trên toàn thế giới...</p>
                    <div className='flex flex-wrap w-full justify-start items-start gap-3 border-b border-gray-300 py-2'>
                        <p className='flex flex-row items-center gap-1 '><span className='text-yellow-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            </span> 8 giờ</p>
                        <p className='flex flex-row items-center gap-1'> <span className='text-red-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                            </span>4 Tuần</p>
                        <p className='flex flex-row items-center gap-1'><span className='text-blue-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                            </svg>
                            </span> Tất cả</p>
                    </div>
                    <div className='flex flex-row w-full h-auto items-center justify-between gap-2 py-2'>
                        <p className='text-base font-bold text-green-500 underline'>2,000,000 <sup className='underline'>đ</sup></p>
                        <button className='btnLVT' onClick={() => navigate(`/classDetail/${course.maKhoaHoc}`)}>Xem chi tiết</button>
                    </div>
                </div>
            </div>
            ))}
        </div>
        </div>
        <CardCourse/>
    </div>
  )
}
