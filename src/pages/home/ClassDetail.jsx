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
        <div className='w-full flex flex-col items-start justify-center h-full py-10 my-10 bg-indigo-600'>
            <div className='w-full max-w-6xl container mx-auto '>
            <h2 className='text-2xl lg:text-4xl text-white font-light text-black-gray uppercase'>Thông tin khóa học</h2>
            <p className='text-black-gray text-lg text-white uppercase'>Tiến lên và không chần chừ !!!</p>
            </div>
        </div>
      </div>
      <CardCourse/>
    </div>
  )
}
