import React, { useEffect, useState } from 'react'
import CardBanner from '../../components/card/CardBanner'
import { VlearningService } from '../../../services/Vlearning';
import { useDispatch } from 'react-redux';
import { turnOffLoading, turnOnLoading } from '../../redux/loadingSlice';


export default function Home() {
  const [listCourse, setListCourse] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    VlearningService.getListCourse()
    .then((result) => {
      setListCourse(result.data);
      dispatch(turnOffLoading())
    }).catch((err) => {
      dispatch(turnOffLoading())
    }).finally(() => {
      
    });
  }, [])

  return (
    <div className='w-full h-full flex flex-col gap-10'>
       <CardBanner />
       
       <div className='grid grid-cols-4 items-start justify-center w-full h-full gap-3 container mx-auto'>
        {listCourse?.slice(0, 16).map((item, index) => {
          return <div key={index} className="card w-full overflow-hidden shadow-xl col-span-4 md:col-span-2 lg:col-span-1 h-full flex flex-col items-start justify-start bg-white">
          <div className='w-full h-full'>
            <img
              src="https://funix.edu.vn/wp-content/uploads/2023/02/cung-cap-%C4%91ay-%C4%91u-kien-thuc-va-ky-nang-co-ban.jpg"
              alt="img" className='w-full h-full object-cover'/>
          </div>
          <div className="card-body w-full leading-none">
            <h6 className='textCardItemSubTitle'>{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</h6>
            <p className='text-xs text-justify'>{item.danhMucKhoaHoc.maDanhMucKhoahoc}</p>
            <div className="card-actions w-full h-10 items-end justify-end">
              <button className="btn btn-success">Xem thêm</button>
            </div>
          </div>
        </div>
        })}
       </div>
    </div>
  )
}
