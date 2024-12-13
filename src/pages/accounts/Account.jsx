import React, { useEffect, useState } from 'react'
import { adminService } from '../../../services/Vlearning'
import { useDispatch } from 'react-redux'
import { turnOffLoading } from '../../redux/loadingSlice'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function Account() {
  const [users, setUsers] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    let dataUser = JSON.parse(localStorage.getItem("DATA_USER"));
    setUsers(dataUser)
    if (!dataUser) {
      message.warning("Vui lòng đăng nhập để sử dụng chức năng này")
      navigate("/login")
    }
  }, [])
  return (
    <div>
      <p>Đây là account</p>
      <div>
        <p>Email: {users.email}</p>
        <p>Họ Tên: {users.hoTen}</p>
        <p>Mã Loại Người Dùng: {users.maLoaiNguoiDung}</p>
        <p>Số ĐT: {users.soDT}</p>
        <p>Tài Khoản: {users.taiKhoan}</p>
        <p>Tên Loại Người Dùng: {users.maLoaiNguoiDung === "HV" ? "Học Viên" : users.maLoaiNguoiDung === "GV" ? "Giáo Viên" : users.tenLoaiNguoiDung}</p>
      </div>
    </div>
  )
}
