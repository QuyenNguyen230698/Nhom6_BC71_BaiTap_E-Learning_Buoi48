import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { adminService } from '../../services/Vlearning';
import { turnOffLoading } from '../redux/loadingSlice';
import { useDispatch } from 'react-redux';
import { message } from 'antd';

export default function Login() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [isActiveClick, setIsActiveClick] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsActiveClick(true);
    try {
      const data = {
        taiKhoan: account,
        matKhau: password
      }
      const res = await adminService.loginUser(data)
      dispatch(turnOffLoading())
      let dataUser = JSON.stringify(res.data);
      localStorage.setItem("DATA_USER", dataUser);
      if (res.data.maLoaiNguoiDung == "GV") {
        message.success("Đăng nhập thành công")
        navigate("/accountAdmin");
      } else {
        message.success("Đăng nhập thành công")
        navigate("/account");
      }
    } catch (error) {
      message.error(error.response?.data || "Đăng nhập thất bại. Vui lòng thử lại!");
      dispatch(turnOffLoading())
    } finally {
      setIsActiveClick(false);
    }
  };

  return (
    <div className="flex justify-center items-center overflow-hidden py-16 bg-white h-35r">
      <div className="w-full max-w-md p-4">
        <div className="flex flex-col w-full h-full">
          <div className="mb-6 flex flex-col gap-1">
            <label className="block mb-2 text-sm font-semibold text-black-gray">Account</label>
            <input
              type="Account"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
              placeholder="Enter your account"
              required
            />
          </div>
          <div className="mb-6 flex flex-col gap-1">
            <label className="block mb-2 text-sm font-semibold text-black-gray">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex gap-5">
            <h4 className="text-gray-500 text-base">Already have an account?</h4>
            <NavLink to="/signup">
              <h4 className="text-base underline underline-offset-4 text-black-gray">Sign up</h4>
            </NavLink>
          </div>
          <button
            disabled={isActiveClick}
            type="submit"
            className="btnLVT btnLVT-sm w-full mt-3"
            onClick={handleLogin}
          >
            {isActiveClick ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}
