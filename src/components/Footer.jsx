import React, { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { turnOffLoading, turnOnLoading } from '../redux/loadingSlice';

export default function Footer() {
  const dispatch = useDispatch()
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

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://api.jobspeeds.com/test', {
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
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div id='footerID' className='bg-black-gray'>
        <div className="grid grid-cols-4 gap-4 p-4 items-stretch md:container mx-auto">
          <div className='flex flex-col items-start justify-start gap-3 w-full col-span-2 md:col-span-1'>
            <h6 data-aos="fade-up" data-aos-delay="100" className='text-white font-bold'>V-LEARNING</h6>
            <p data-aos="fade-up" data-aos-delay="200" className='textCollectionItemDescription flex flex-row items-center gap-2 link link-hover hover:text-white'>
              <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
              </svg></span>
              <span>1800-123-4567</span></p>
            <p data-aos="fade-up" data-aos-delay="300" className='textCollectionItemDescription flex flex-row items-center gap-2 link link-hover hover:text-white'>
              <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
              </svg>
            </span><span>info@vlearning.com</span></p>
            <p data-aos="fade-up" data-aos-delay="400" className='textCollectionItemDescription flex flex-row items-center gap-2 link link-hover hover:text-white'>
              <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
            </span><span>Hồ Chí Minh</span></p>
          </div>
          <div className='flex flex-col items-start justify-start gap-3 w-full col-span-2 md:col-span-1'>
            <h6 data-aos="fade-up" data-aos-delay="100" className='text-white font-bold uppercase'>Liên kết</h6>
            <p data-aos="fade-up" data-aos-delay="200" className='textCollectionItemDescription flex flex-row items-center gap-2 link link-hover hover:text-white'>
              <span>Trang chủ</span></p>
              <p data-aos="fade-up" data-aos-delay="300" className='textCollectionItemDescription flex flex-row items-center gap-2 link link-hover hover:text-white'>
              <span>Dịch vụ</span></p>
              <p data-aos="fade-up" data-aos-delay="400" className='textCollectionItemDescription flex flex-row items-center gap-2 link link-hover hover:text-white'>
              <span>Nhóm</span></p>
              <p data-aos="fade-up" data-aos-delay="500" className='textCollectionItemDescription flex flex-row items-center gap-2 link link-hover hover:text-white'>
              <span>Blog</span></p>
          </div>
          <div className='flex flex-col items-start justify-start gap-3 w-full col-span-2 md:col-span-1'>
            <h6 data-aos="fade-up" data-aos-delay="100" className='text-white font-bold uppercase'>Khóa học</h6>
            <p data-aos="fade-up" data-aos-delay="200" className='textCollectionItemDescription flex flex-row items-center gap-2 link link-hover hover:text-white'>
              <span>Front End</span></p>
              <p data-aos="fade-up" data-aos-delay="300" className='textCollectionItemDescription flex flex-row items-center gap-2 link link-hover hover:text-white'>
              <span>Back End</span></p>
              <p data-aos="fade-up" data-aos-delay="400" className='textCollectionItemDescription flex flex-row items-center gap-2 link link-hover hover:text-white'>
              <span>Full Stack</span></p>
              <p data-aos="fade-up" data-aos-delay="500" className='textCollectionItemDescription flex flex-row items-center gap-2 link link-hover hover:text-white'>
              <span>Node Js</span></p>
          </div>
          <div className='flex flex-col items-start justify-start gap-3 w-full col-span-4 md:col-span-1'>
            <h6 data-aos="fade-up" data-aos-delay="100" className='text-white font-bold uppercase'>Đăng kí tư vấn</h6>
            <input name="name" value={formData.name} onChange={handleChange} data-aos="fade-up" data-aos-delay="200" type="text" className="w-full bg-transparent text-gray-400 border-b border-gray-500 focus:outline-none py-1 text-base" placeholder="Họ và tên" />
            <input name="email" value={formData.email} onChange={handleChange} data-aos="fade-up" data-aos-delay="300" type="text" className="w-full bg-transparent text-gray-400 border-b border-gray-500 focus:outline-none py-1 text-base" placeholder="Email" />
            <input name="phone" value={formData.phone} onChange={handleChange} data-aos="fade-up" data-aos-delay="400" type="number" className="w-full bg-transparent text-gray-400 border-b border-gray-500 focus:outline-none py-1 text-base" placeholder="Số điện thoại" />
            <button onClick={handleSubmit} data-aos="fade-up" data-aos-delay="500" className='btnLVT'>Đăng kí</button>
          </div>
        </div>
      </div>
        <footer className="footer footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by VLEARNING</p>
          </aside>
        </footer>
    </>
  )
}
