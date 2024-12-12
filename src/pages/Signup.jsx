import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    taiKhoan: '',
    matKhau: '',
    hoTen: '',
    soDT: '',
    maLoaiNguoiDung: 'KhachHang', // Giá trị mặc định
    maNhom: 'GP01', // Giá trị mặc định
    email: ''
  });
  const [isActiveClick, setIsActiveClick] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsActiveClick(true);
    // Xử lý logic đăng ký ở đây
  };

  return (
    <div className="flex justify-center items-center overflow-hidden py-16 bg-base-200 h-55r">
      <div className="w-full max-w-md p-4">
        <div className="flex flex-col w-full h-full">
          <div className="mb-6 flex flex-col gap-1">
            <label className="block mb-2 text-sm font-semibold text-white">Tài khoản</label>
            <input
              type="text"
              name="taiKhoan"
              value={formData.taiKhoan}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded focus:outline-none bg-white"
              placeholder="Nhập tài khoản"
              required
            />
          </div>

          <div className="mb-6 flex flex-col gap-1">
            <label className="block mb-2 text-sm font-semibold text-white">Mật khẩu</label>
            <input
              type="password"
              name="matKhau"
              value={formData.matKhau}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded focus:outline-none bg-white"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <div className="mb-6 flex flex-col gap-1">
            <label className="block mb-2 text-sm font-semibold text-white">Họ tên</label>
            <input
              type="text"
              name="hoTen"
              value={formData.hoTen}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded focus:outline-none bg-white"
              placeholder="Nhập họ tên"
              required
            />
          </div>

          <div className="mb-6 flex flex-col gap-1">
            <label className="block mb-2 text-sm font-semibold text-white">Số điện thoại</label>
            <input
              type="tel"
              name="soDT"
              value={formData.soDT}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded focus:outline-none bg-white"
              placeholder="Nhập số điện thoại"
              required
            />
          </div>

          <div className="mb-6 flex flex-col gap-1">
            <label className="block mb-2 text-sm font-semibold text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded focus:outline-none bg-white"
              placeholder="Nhập email"
              required
            />
          </div>

          <div className="flex gap-5">
            <h4 className="text-gray-500 text-base">Đã có tài khoản?</h4>
            <NavLink to="/login">
              <h4 className="text-base underline underline-offset-4 text-white">Đăng nhập</h4>
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
