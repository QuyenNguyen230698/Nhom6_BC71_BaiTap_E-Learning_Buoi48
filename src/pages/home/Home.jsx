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
      console.log(result.data);
      dispatch(turnOffLoading())
    }).catch((err) => {
      dispatch(turnOffLoading())
    }).finally(() => {
      
    });
  }, [])

  return (
    <div>
       <CardBanner />
       <div className='grid grid-cols-4 items-start justify-center w-full h-full container mx-auto'>
        {listCourse?.map((item, index) => {
          return <div key={index} className='col-span-4 md:col-span-2 lg:col-span-1 w-full h-full items-start justify-start'>
            <div className='flex flex-col w-fit h-full overflow-hidden'>
              <img src={item.hinhAnh} alt="" className='w-full h-full object-cover bg-contain'/>
              <h5 className='text-justify textTitleImage'>{item.tenKhoaHoc}</h5>
              <h6 className='textCardItemSubTitle'>{item.tenDanhMucKhoaHoc}</h6>
              <p className='text-xs text-justify'>{item.moTa}</p>
            </div>
        </div>
        })}
       </div>
    </div>
  )
}
