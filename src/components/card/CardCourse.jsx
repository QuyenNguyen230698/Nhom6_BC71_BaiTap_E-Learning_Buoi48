import React, { useEffect, useState } from 'react'
import { VlearningService } from '../../../services/Vlearning';

export default function CardCourse() {
    const [listCourseCatalog, setListCourseCatalog] = useState([]);
    const arrImg = [
        {src: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_5_7_638506925663711834_anh-dai-dien.jpeg", alt: "course-1",price: '2,000,000'},
        {src: "https://uptoskills.com/wp-content/uploads/2024/04/what-is-web-design.webp", alt: "course-1",price: '2,000,000'},
        {src: "https://techvccloud.mediacdn.vn/thumb_w/650/280518386289090560/2024/10/4/khai-niem-xcode-1728036134135557100033.jpg", alt: "course-1",price: '2,000,000'},
        {src: "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png", alt: "course-1",price: '2,000,000'},
        {src: "https://canhme.com/wp-content/uploads/2018/09/Nodejs.png", alt: "course-1",price: '2,000,000'},
        {src: "https://media.istockphoto.com/id/1542563834/vector/brain-bulb-icon-symbol-design.jpg?s=612x612&w=0&k=20&c=ytnn36z_LRZGjlzyLnEk_eF5zZKQuHP-GegWKImeNNM=", alt: "course-1",price: '2,000,000'},
    ]
    useEffect(() => {
        VlearningService.getCourseCatalog().then(res => {
            setListCourseCatalog(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])
  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-white py-10 px-3'>
        <div className='w-full flex justify-center items-center py-4'>
            <h2 className='text-2xl lg:text-4xl font-light text-black-gray uppercase pb-5 lg:pb-10'>Khóa học phổ biến</h2>
        </div>
      <div className='w-full max-w-5xl h-full container mx-auto grid grid-cols-6 items-center justify-stretch gap-5'>
        {listCourseCatalog?.map((course, idx) => (
          <div key={idx} data-aos="fade-up" data-aos-delay="100" className='w-full h-full flex flex-col justify-stretch gap-2 col-span-3 lg:col-span-2 shadow-lg'>
            <div className='w-full h-full'>
                <img src={arrImg[idx].src} alt={arrImg[idx].alt} className='w-full h-full object-cover'/>
            </div>
            <div className='w-full h-fit flex flex-col justify-center text-black-gray p-3 gap-3'>
                <h3 className='text-2xl lg:text-3xl font-light text-black-gray'>{course.tenDanhMuc}</h3>
                <p className='text-sm lg:text-base text-justify text-black-gray'>Lập trình hiện đang là xu hướng trên toàn thế giới...</p>
                <div className='flex flex-row w-full justify-center items-end gap-3 border-b border-gray-300 pb-2'>
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
                <div className='flex flex-row w-full h-auto items-center justify-between'>
                    <p className='text-base font-bold text-green-500 underline'>{arrImg[idx].price} <sup className='underline'>đ</sup></p>
                    <button className='btnLVT'>Xem chi tiết</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
