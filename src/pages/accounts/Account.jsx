import React, { useEffect, useState } from 'react'
import { adminService } from '../../../services/Vlearning'
import { useDispatch } from 'react-redux'
import { turnOffLoading } from '../../redux/loadingSlice'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function Account() {
  const [users, setUsers] = useState({})
  const [courseSignup, setCourseSignup] = useState([])
  const [showPersonalInfo, setShowPersonalInfo] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    let dataUser = JSON.parse(localStorage.getItem("DATA_USER"));
    setUsers(dataUser)
    if (!dataUser) {
      message.warning("Vui lòng đăng nhập để sử dụng chức năng này")
      navigate("/login")
    }
    adminService.getUserDetail(dataUser.taiKhoan).then((result) => {
      setCourseSignup(result.data.chiTietKhoaHocGhiDanh)
      dispatch(turnOffLoading())
    }).catch((err) => {
      console.log(err)
      dispatch(turnOffLoading())
    });
  }, [])

  return (
    <div className='py-32 flex flex-col w-full h-full'>
      <div className='w-full flex justify-evenly gap-6'>
        <button 
          className={`nav-item ${showPersonalInfo ? 'font-bold uppercase text-green-500' : ''}`} 
          onClick={() => setShowPersonalInfo(true)}
        >
          Thông tin cá nhân
        </button>
        <button 
          className={`nav-item ${!showPersonalInfo ? 'font-bold uppercase text-green-500' : ''}`} 
          onClick={() => setShowPersonalInfo(false)}
        >
          Khóa học
        </button>
      </div>
      {showPersonalInfo ? (
        <div className='w-full container mx-auto max-w-4xl h-full py-10'>
          <div className='flex w-full justify-between items-center py-2 border-b border-black'>
          <p className='text-black-gray text-lg font-bold'>Email: {users.email}</p>
          <p className='text-black-gray text-lg font-bold'>Họ Tên: {users.hoTen}</p>
          </div>
          <div className='flex w-full justify-between items-center py-2 border-b border-black'>
          <p className='text-black-gray text-lg font-bold'>Tài Khoản: {users.taiKhoan}</p>
          <p className='text-black-gray text-lg font-bold'>Tên Loại Người Dùng: {users.maLoaiNguoiDung === "HV" ? "Học Viên" : users.maLoaiNguoiDung === "GV" ? "Giáo Viên" : users.tenLoaiNguoiDung}</p>
          </div>
          <div className='flex w-full justify-between items-center py-2 border-b border-black'>
          <p className='text-black-gray text-lg font-bold'>Số ĐT: {users.soDT}</p>
          <p className='text-black-gray text-lg font-bold'>Mã Loại Người Dùng: {users.maLoaiNguoiDung}</p>
          </div>
          <div className='w-full flex justify-end items-end py-2'>
            <button className='btn btn-warning text-white'>Cập nhật thông tin</button>
          </div>
        </div>
      ) : (
        <div className='w-full container mx-auto max-w-6xl py-10'>
          {courseSignup.length > 0 ? (
            courseSignup.map((course, index) => (
              <div key={index} className='course-item py-2 border-b border-black'>
                <p className='text-black-gray text-lg font-bold'>Tên Khóa Học: {course.tenKhoaHoc}</p>
                <p className='text-black-gray text-lg'>Mô Tả: {course.moTa}</p>
              </div>
            ))
          ) : (
            <p>Bạn chưa đăng ký khóa học nào!</p>
          )}
        </div>
      )}
    </div>
  )
}
