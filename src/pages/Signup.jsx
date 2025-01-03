import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { adminService } from '../../services/Vlearning';
import { turnOffLoading } from '../redux/loadingSlice';
import { useDispatch } from 'react-redux';
import { message } from 'antd';

export default function Signup() {
  const [formData, setFormData] = useState({
    taiKhoan: '',
    matKhau: '',
    hoTen: '',
    soDT: '',
    maNhom: 'GP01', // Giá trị mặc định
    email: ''
  });
  const [isActiveClick, setIsActiveClick] = useState(false);
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignup = async (e) => {
    if (!formData.taiKhoan) {
      message.error("Tài khoản không được để trống!")
      return
    }
    if (!formData.matKhau) {
      message.error("Mật khẩu không được để trống!")
      return
    }
    if (!formData.hoTen) {
      message.error("Vui lòng nhập họ tên!")
      return
    }
    if (!formData.soDT) {
      message.error("Vui lòng nhập số điện thoại!")
      return
    }
    if (!formData.email) {
      message.error("Vui lòng nhập email!")
      return
    }
    if (formData.matKhau.length < 8 || !/[A-Z]/.test(formData.matKhau)) {
      message.error("Mật khẩu không đủ mạnh!")
      return
    }
    if (formData.soDT.length !== 10) {
      message.error("Số điện thoại không đúng!")
      return
    }
    if (!formData.email.includes('@')) {
      message.error("Email không hợp lệ!")
      return
    }
    e.preventDefault();
    setIsActiveClick(true);
    // Xử lý logic đăng ký ở đây
    const data = {
      taiKhoan: formData.taiKhoan,
      matKhau: formData.matKhau,
      hoTen: formData.hoTen,
      soDT: formData.soDT,
      email: formData.email,
      maNhom: "GP01"
    }
    adminService.registerUser(data).then((result) => {
      message.success("Đăng ký thành công, đăng nhập để sử dụng tài khoản.")
      dispatch(turnOffLoading())
    }).catch((err) => {
      message.error("Tài khoản đã tồn tại!")
      dispatch(turnOffLoading())
    });
  };

  return (
    <div className="flex justify-center items-center overflow-hidden py-5 bg-white h-50r">
      <div className="w-full max-w-md p-4">
        <div className="flex flex-col w-full h-full">
          <div className="mb-6 flex flex-col gap-1">
            <label className="block mb-2 text-sm font-semibold text-black-gray">Tài khoản</label>
            <input
              type="text"
              name="taiKhoan"
              value={formData.taiKhoan}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
              placeholder="Nhập tài khoản"
              required
            />
          </div>

          <div className="mb-6 flex flex-col gap-1">
            <label className="block mb-2 text-sm font-semibold text-black-gray">Mật khẩu</label>
            <input
              type="password"
              name="matKhau"
              value={formData.matKhau}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <div className="mb-6 flex flex-col gap-1">
            <label className="block mb-2 text-sm font-semibold text-black-gray">Họ tên</label>
            <input
              type="text"
              name="hoTen"
              value={formData.hoTen}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
              placeholder="Nhập họ tên"
              required
            />
          </div>

          <div className="mb-6 flex flex-col gap-1">
            <label className="block mb-2 text-sm font-semibold text-black-gray">Số điện thoại</label>
            <input
              type="tel"
              name="soDT"
              value={formData.soDT}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
              placeholder="Nhập số điện thoại"
              required
            />
          </div>

          <div className="mb-6 flex flex-col gap-1">
            <label className="block mb-2 text-sm font-semibold text-black-gray">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
              placeholder="Nhập email"
              required
            />
          </div>

          <div className="flex gap-5">
            <h4 className="text-gray-500 text-base">Đã có tài khoản?</h4>
            <NavLink to="/login">
              <h4 className="text-base underline underline-offset-4 text-black-gray">Đăng nhập</h4>
            </NavLink>
          </div>

          <button
            disabled={isActiveClick}
            type="submit"
            className="btnLVT btnLVT-sm w-full mt-3"
            onClick={handleSignup}
          >
            {isActiveClick ? 'Đang đăng ký...' : 'Đăng ký'}
          </button>
        </div>
      </div>
    </div>
  );
}
