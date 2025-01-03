import React, { useEffect, useState } from 'react'
import { VlearningService } from '../../../services/Vlearning';
import { useDispatch } from 'react-redux';
import { turnOffLoading, turnOnLoading } from '../../redux/loadingSlice';
import { useNavigate } from 'react-router-dom';

export default function CardListCourse({dataImg}) {
    const [listCourse, setListCourse] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchUser, setSearchUser] = useState([]);
    const coursesPerPage = 8; // Number of courses per page
    const dispatch = useDispatch();
    const navigate = useNavigate()
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

      const autoSearch = async (event) => {
        let dataUser = JSON.parse(localStorage.getItem("DATA_USER"));
        const searchFilter = async (tenKhoaHoc) => {
          const responsive = await fetch(
            `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}`,
            {
              method: "GET",
              headers: {
                TokenCybersoft:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJUcmFpbmluZyBnaeG6o25nIHZpw6puIGN5YmVyc29mdCAyMDIyIiwiSGV0SGFuU3RyaW5nIjoiMzAvMTEvMjAyOCIsIkhldEhhblRpbWUiOiIxODU5MTU1MjAwMDAwIiwibmJmIjoxNTg0MjkxNjAwLCJleHAiOjE4NTkzMDI4MDB9.9nOWAOoO7NtipuO-A-4_8kwzVp7j5HSdXjEegqTgcXI",
                Authorization: `Bearer ${dataUser?.accessToken || ""}`,
                "Content-Type": "application/json",
              },
            }
          );
          return responsive.json();
        };
        setSearchUser(await searchFilter(event.target.value));
      };

    const currentData = searchUser.length > 0 ? searchUser : listCourse;
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = currentData.slice(indexOfFirstCourse, indexOfLastCourse);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(currentData.length / coursesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='w-full h-full bg-home'>
            <div className='w-full  h-full flex flex-col gap-4 justify-center items-center pb-10 container mx-auto px-3'>
                <div data-aos="fade-up" data-aos-delay="100" className='uppercase text-2xl lg:text-4xl text-black-gray font-light text-center w-full py-8'>Danh sách khóa học</div>
                {/* nav search */}
                <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col lg:flex-row items-start lg:items-center justify-between w-full lg:max-w-6xl gap-3'>
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
                            <input type="text" className="grow textSearch focus:outline-none bg-transparent" placeholder="Tìm kiếm..." onChange={autoSearch} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                            </svg>
                        </label>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col w-full h-full gap-4 overflow-hidden'>
                {/* render danh sách khóa học */}
                {currentCourses.map((item, index) => {
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
                        <button className='btnLVT-sm' onClick={() => navigate(`/classDetail/${item.maKhoaHoc}`)}>Đăng Ký Ngay</button>
                    </div>
                    </div>)
                })}
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col lg:flex-row items-start lg:items-center justify-between w-full h-full lg:max-w-7xl gap-3'>
                    <div className="w-auto flex flex-row items-center justify-center gap-4">
                        <div className='w-fit text-black-gray '>
                        <a href="#footerID"><button className='btnLVT'>Nhận Thêm Thông Tin</button></a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className="w-auto h-full flex flex-row items-center justify-center gap-4">
                        <div className='w-full h-full text-black-gray '>
                            <div className="join h-full" style={{borderRadius: '0px'}}>
                                <button className="join-item btn btn-sm rounded-none btn-outline input-bordered" onClick={handlePreviousPage}>«</button>
                                <button className="join-item btn btn-sm rounded-none btn-outline input-bordered">Page {currentPage}</button>
                                <button className="join-item btn btn-sm rounded-none btn-outline input-bordered" onClick={handleNextPage}>»</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
