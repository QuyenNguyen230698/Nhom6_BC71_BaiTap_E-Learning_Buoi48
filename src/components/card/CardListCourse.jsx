import React, { useEffect, useState } from 'react'
import { VlearningService } from '../../../services/Vlearning';
import { useDispatch } from 'react-redux';
import { turnOffLoading, turnOnLoading } from '../../redux/loadingSlice';

export default function CardListCourse({dataImg}) {
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
    <div className='w-full lg:max-w-6xl h-full flex flex-col gap-4 justify-center items-center pb-10 container mx-auto px-3'>
        <div data-aos="fade-up" data-aos-delay="100" className='uppercase text-2xl lg:text-4xl text-black-gray font-light text-center w-full py-8'>Danh sách khóa học</div>
        {/* nav search */}
        <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-3'>
        <div className="w-auto flex flex-row items-center justify-center gap-4 border-b border-black">
            <h2 className='text-black-gray textCardItemTitle'>Danh mục khóa học</h2>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black-gray">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            </span>
        </div>
        <div className="w-auto flex flex-row items-center justify-center gap-4">
            <div className='w-fit text-black-gray '>
            <label className="border-b flex items-center gap-2 ">
                <input type="text" className="grow textSearch focus:outline-none bg-transparent" placeholder="Tìm kiếm..." />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                </svg>
            </label>
            </div>
        </div>
        </div>
        
        <div className='flex flex-col w-full h-full gap-4 overflow-hidden'>
        {/* render danh sách khóa học */}
        {listCourse?.slice(0,8).map((item, index) => {
            return (<div key={index} data-aos="fade-up" data-aos-delay="100" className='flex flex-col lg:flex-row items-start lg:items-center justify-between w-full border-b border-gray py-4'>
            <div className="w-full flex flex-row items-center justify-start gap-4">
                <div className='w-40 h-20 hidden lg:block'>
                <img src={dataImg[index % dataImg.length].src} alt="img" className='w-full h-full object-cover'/>
                </div>
                <div className='flex flex-col items-start justify-center w-fit h-full text-black-gray gap-1'>
                <h2 className='text-2xl lg:text-4xl text-black-gray'>{item.tenKhoaHoc}</h2>
                <div className='flex flex-row w-full items-center justify-center'>
                    <div className="flex flex-col lg:flex-row gap-1 w-full items-center">
                    <div className="flex flex-wrap w-full lg:w-auto gap-1">
                        <p className="text-sm">Posted:</p>
                        <p className="text-sm">{item.ngayTao}</p>
                    </div>
                        <div className="flex flex-wrap w-full justify-start items-center lg:w-auto gap-1">
                        <p className='hidden lg:block'>|</p>
                        <p className="text-sm uppercase">V-LEARNING</p>
                        <p>|</p>
                        <p className="text-sm">Online/Offline</p>
                        <p>|</p>
                        <p className="text-sm">{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="w-auto flex flex-row items-center justify-center gap-4">
                <button className='btnLVT-sm'>Đăng Ký Ngay</button>
            </div>
            </div>)
        })}
        </div>
   </div>
  )
}
