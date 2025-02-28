import React, { useEffect, useState } from 'react'
import { VlearningService } from '../../../services/Vlearning';
import { useDispatch } from 'react-redux';
import { turnOffLoading, turnOnLoading } from '../../redux/loadingSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';

export default function CardListCourse({dataImg}) {
    const [listCourse, setListCourse] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchUser, setSearchUser] = useState([]);
    const coursesPerPage = 8; // Number of courses per page
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [disabledBtnSubmit, setDisabledBtnSubmit] = useState(false);

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

    const openModal = () => {
        setIsVisible(true);
        document.getElementById('tourGiftModal').showModal();
    };

    const closeModal = () => {
        setIsVisible(false);
        document.getElementById('tourGiftModal').close();
    };

    const submitForm = (event) => {
        event.preventDefault();
        setDisabledBtnSubmit(true);
        // Simulate form submission
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: ''
            })
            setDisabledBtnSubmit(false);
            closeModal();
        }, 2000);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
      const isValidPhone = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
      }

      const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.phone) {
          message.error("Các trường thông tin không được bỏ trống!");
          return;
        }
        if (!isValidEmail(formData.email)) {
            message.error('Email phải đúng định dạng!');
            return;
        }
        if (!isValidPhone(formData.phone)) {
            message.error('Số điện thoại phải bằng 10 chữ số!');
            return;
        }

        try {
          const response = await axios.post('http://14.225.204.233:8000/test', {
            email: formData.email,
            name: formData.name,
            phone: formData.phone
          }, {
            headers: {
              'Content-Type': 'application/json',
            }
          });
          message.success("Chúng tôi đã nhận được yêu cầu của bạn, hãy kiểm tra mail nhé!")
        } catch (error) {
          dispatch(turnOffLoading())
          message.error("Có lỗi, vui lòng thử lại!")
        }
      };

    return (
        <div>
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
                            <a ><button onClick={openModal} className='btnLVT'>Nhận Thêm Thông Tin</button></a>
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
                {/* Form register mail promotion */}
                <dialog id="tourGiftModal" className="modal items-center h-auto backdrop-blur-xl">
                    <div className="modal-box relative max-w-xl text-center w-11/12 h-fit overflow-hidden rounded">
                        <form method="dialog">
                            <button onClick={closeModal} className="focus:outline-none absolute text-stone-500 right-8 top-6 text-lg">✕</button>
                        </form>

                        <section className="w-full bg-white px-2 py-3 lg:py-8">
                            <div className="container mx-auto wrapper-container flex flex-col max-w-6xl w-full gap-6">
                                <h1 className="text-start font-serif uppercase textTitle font-light text-up">
                                    Nhận Ưu Đãi Khóa Học
                                </h1>
                                <h3 className="text-sm lg:text-base font-light text-start">
                                    Cảm ơn bạn đã chú ý đến khoá học của chúng tôi. Để nhận ưu đãi khoá học, bạn hãy điền thông tin của bản thân vào Form dưới đây!
                                </h3>
                                <form className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4" onSubmit={submitForm}>
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block mb-1 font-light text-base">
                                            <span className="text-base font-serif flex items-center text-center">Họ và tên<i
                                                style={{ fontSize: '0.5rem' }} className="bi bi-asterisk text-xs text-error px-1"></i></span>
                                        </label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange}
                                            className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-1 text-base"
                                            placeholder="Họ và tên" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block mb-1 font-light text-base">
                                            <span className="text-base font-serif flex items-center text-center">Email<i
                                                style={{ fontSize: '0.5rem' }} className="bi bi-asterisk text-xs text-error px-1"></i></span>
                                        </label>
                                        <input type="text" name="email" value={formData.email} onChange={handleChange}
                                            className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-1 text-base"
                                            placeholder="Email của bạn" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block mb-1 font-light text-base">
                                            <span className="text-base font-serif flex items-center text-center">Số điện thoại<i
                                                style={{ fontSize: '0.5rem' }} className="bi bi-asterisk text-xs text-error px-1"></i></span>
                                        </label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                            className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-1 text-base"
                                            placeholder="Số điện thoại của bạn" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="inline-flex items-center">
                                            <span className="text-sm text-gray-400">
                                                Tôi đồng ý nhận các cập nhật sản phẩm mới nhất, khuyến mãi và tin tức từ V-LEARNING. Bạn có thể hủy đăng ký bất cứ lúc nào mà không cần lý do. Chính sách bảo mật của chúng tôi áp dụng.
                                            </span>
                                        </label>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 flex justify-center mt-3">
                                        <button onClick={handleSubmit} disabled={disabledBtnSubmit} type="submit" className="btn btnTDC-sm w-full lg:w-1/3">
                                            Nhận thông tin
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {disabledBtnSubmit &&
                                <div className="fixed top-0 left-0 right-0 h-full min-h-screen bg-black overflow-hidden opacity-80 flex items-center justify-center z-40">
                                    <span className="loading loading-spinner loading-lg text-base"></span>
                                </div>
                            }
                        </section>
                    </div>
                </dialog>
            </div>
        </div>
    )
}
