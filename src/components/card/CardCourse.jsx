import React, { useEffect, useState } from 'react'
import { VlearningService } from '../../../services/Vlearning';

export default function CardCourse() {
    const [listCourseCatalog, setListCourseCatalog] = useState([]);
    const arrImg = [
        {src: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_5_7_638506925663711834_anh-dai-dien.jpeg", alt: "course-1"},
        {src: "https://uptoskills.com/wp-content/uploads/2024/04/what-is-web-design.webp", alt: "course-1"},
        {src: "https://techvccloud.mediacdn.vn/thumb_w/650/280518386289090560/2024/10/4/khai-niem-xcode-1728036134135557100033.jpg", alt: "course-1"},
        {src: "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png", alt: "course-1"},
        {src: "https://canhme.com/wp-content/uploads/2018/09/Nodejs.png", alt: "course-1"},
        {src: "https://media.istockphoto.com/id/1542563834/vector/brain-bulb-icon-symbol-design.jpg?s=612x612&w=0&k=20&c=ytnn36z_LRZGjlzyLnEk_eF5zZKQuHP-GegWKImeNNM=", alt: "course-1"},
    ]
    useEffect(() => {
        VlearningService.getCourseCatalog().then(res => {
            setListCourseCatalog(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])
  return (
    <div className='w-full h-full bg-white'>
      <div className='w-full h-full container mx-auto grid grid-cols-6 items-center justify-stretch gap-5'>
        {listCourseCatalog?.map((course, idx) => (
          <div key={idx} className='w-full h-full flex flex-col justify-stretch gap-2 col-span-1 shadow'>
            <div className='w-full h-full'>
                <img src={arrImg[idx].src} alt={arrImg[idx].alt} className='w-full h-full object-cover'/>
            </div>
            <div className='w-full h-fit flex flex-col items-center justify-center'>
                <h3 className='text-base lg:text-lg text-black-gray'>{course.tenDanhMuc}</h3>
                <button className='btnLVT'>Xem chi tiết</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
