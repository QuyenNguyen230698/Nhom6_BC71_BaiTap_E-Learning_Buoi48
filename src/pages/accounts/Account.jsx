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

  const handleDeleteSignupCourse = (maKhoaHoc) => {
    const formData = JSON.stringify({
      maKhoaHoc: maKhoaHoc,
      taiKhoan: users.taiKhoan
    });
    adminService.deleteSignupCourse(formData)
      .then(response => {
        dispatch(turnOffLoading())
        message.success("Hủy đăng ký khóa học thành công");
        adminService.getUserDetail(users.taiKhoan).then((result) => {
          setCourseSignup(result.data.chiTietKhoaHocGhiDanh);
        });
      })
      .catch(error => {
        dispatch(turnOffLoading())
        message.error("Có lỗi xảy ra khi hủy đăng ký khóa học");
        console.error(error);
      });
  }

  const [formData, setFormData] = useState({
    taiKhoan: '',
    matKhau: '',
    hoTen: '',
    soDT: '',
    maNhom: 'GP01', // Giá trị mặc định
    email: '',
    maLoaiNguoiDung:''
  });

  const validateInput = (name, value) => {
    switch (name) {
      case 'taiKhoan':
      case 'matKhau':
      case 'hoTen':
      case 'soDT':
      case 'email':
      case 'maLoaiNguoiDung':
        return value.trim() !== '';
      case 'maNhom':
        return value.trim() !== '' || value === 'GP01';
      default:
        return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (validateInput(name, value)) {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else {
      message.error(`${name} không được để trống`);
    }
  };

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const dataUpdate = {
      taiKhoan: users.taiKhoan,
      matKhau: formData.matKhau,
      hoTen: formData.hoTen,
      soDT: formData.soDT,
      email: formData.email,
      maNhom: "GP01",
      maLoaiNguoiDung: users.maLoaiNguoiDung
    };
    adminService.updateUserCourse(JSON.stringify(dataUpdate))
      .then(response => {
        setUsers(prevUsers => ({
          ...prevUsers,
          ...formData
        }));
        message.success("Cập nhật thông tin thành công");
        dispatch(turnOffLoading())
        setFormData({
          taiKhoan: '',
          matKhau: '',
          hoTen: '',
          soDT: '',
          maNhom: 'GP01', // Giá trị mặc định
          email: '',
          maLoaiNguoiDung:''
        });
      })
      .then(() => {
        closeModal();
      })
      .catch(error => {
        setFormData({
          taiKhoan: '',
          matKhau: '',
          hoTen: '',
          soDT: '',
          maNhom: 'GP01', // Giá trị mặc định
          email: '',
          maLoaiNguoiDung:''
        });
        dispatch(turnOffLoading())
        message.error("Có lỗi xảy ra khi cập nhật thông tin");
      });
  };

  const closeModal = () => {
    document.getElementById('my_modal_1').close();
  };

  useEffect(() => {
    let dataUser = JSON.parse(localStorage.getItem("DATA_USER"));
    setUsers(dataUser);
    if (!dataUser) {
      message.warning("Vui lòng đăng nhập để sử dụng chức năng này");
      window.location.href = "/login"
    } else {
      setFormData({
        taiKhoan: dataUser.taiKhoan || '',
        matKhau: dataUser.matKhau || '',
        hoTen: dataUser.hoTen || '',
        soDT: dataUser.soDT || '',
        maNhom: 'GP01',
        email: dataUser.email || '',
        maLoaiNguoiDung: dataUser.maLoaiNguoiDung || ''
      });
    }
    adminService.getUserDetail(dataUser.taiKhoan).then((result) => {
      setCourseSignup(result.data.chiTietKhoaHocGhiDanh);
      dispatch(turnOffLoading());
    }).catch((err) => {
      console.log(err);
      dispatch(turnOffLoading());
    });
  }, []);

  return (
    <div className='py-32 flex flex-col w-full h-full bg-home'>
      <div className='w-full flex flex-col lg:flex-row justify-center container mx-auto gap-6 px-6'>
        {users.maLoaiNguoiDung === "GV" ? (
          <button 
            className="btn btn-outline btn-error" 
            onClick={() => navigate("/accountAdmin")}
          >
            Trang Quản Lý User
          </button>
        ) : null}
        <button 
          className={`btn btn-outline btn-success ${showPersonalInfo ? 'font-bold uppercase ' : ''}`} 
          onClick={() => setShowPersonalInfo(true)}
        >
          Thông tin cá nhân
        </button>
        <button 
          className={`btn btn-outline btn-info ${!showPersonalInfo ? 'font-bold uppercase ' : ''}`} 
          onClick={() => setShowPersonalInfo(false)}
        >
          Khóa học
        </button>
      </div>
      {showPersonalInfo ? (
        <div className='w-full container mx-auto max-w-4xl h-full py-10 px-4 flex flex-col'>
          <div className='flex flex-col lg:flex-row w-full lg:justify-between lg:items-center py-2 border-b border-black'>
          <p className='text-black-gray text-lg font-bold'>Email: {users.email}</p>
          <p className='text-black-gray text-lg font-bold'>Họ Tên: {users.hoTen}</p>
          </div>
          <div className='flex flex-col lg:flex-row w-full lg:justify-between lg:items-center py-2 border-b border-black'>
          <p className='text-black-gray text-lg font-bold'>Tài Khoản: {users.taiKhoan}</p>
          <p className='text-black-gray text-lg font-bold'>Tên Loại Người Dùng: {users.maLoaiNguoiDung === "HV" ? "Học Viên" : users.maLoaiNguoiDung === "GV" ? "Giáo Viên" : users.tenLoaiNguoiDung}</p>
          </div>
          <div className='flex flex-col lg:flex-row w-full lg:justify-between lg:items-center py-2 border-b border-black'>
          <p className='text-black-gray text-lg font-bold'>Số ĐT: {users.soDT}</p>
          <p className='text-black-gray text-lg font-bold'>Mã Loại Người Dùng: GP01</p>
          </div>
          <div className='w-full flex justify-end items-end py-2'>
            <button className='btn btn-warning text-white' onClick={()=>document.getElementById('my_modal_1').showModal()}>Cập nhật thông tin</button>
          </div>
        </div>
      ) : (
        <div className='w-full container mx-auto max-w-6xl py-10 px-3'>
          {courseSignup.length > 0 ? (
            courseSignup.map((course, index) => (
              <div key={index} className='course-item flex flex-row justify-between items-center py-2 border-b border-black'>
                <div className='w-4/6 py-2'>
                  <p className='text-black-gray text-lg font-bold'>Tên Khóa Học: {course.tenKhoaHoc}</p>
                  <p className='text-black-gray text-lg text-justify line-clamp-4 lg:line-clamp-none'>Mô Tả: {course.moTa}</p>
                </div>
                <div className='w-fit py-2'>
                  <button onClick={() => handleDeleteSignupCourse(course.maKhoaHoc)} className='btn btn-warning text-white'>Huỷ đăng ký khóa học</button>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center text-black-gray text-lg font-bold'>Bạn chưa đăng ký khóa học nào!</p>
          )}
        </div>
      )}
        <dialog id="my_modal_1" className="modal w-full h-full flex justify-center items-center backdrop-blur-xl ">
          <div className="h-auto py-6 px-10 w-full max-w-lg bg-white rounded-md z-50">
            <div className="flex flex-col items-start leading-none w-full">

            <div className="mb-6 flex flex-col gap-1">
                <label className="block mb-2 text-sm font-semibold text-black-gray">Họ tên</label>
                <input
                  disabled
                  type="text"
                  name="hoTen"
                  value={formData.hoTen}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded focus:outline-none bg-stone-100"
                  placeholder="Nhập họ tên"
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
            </div>
            <div className=" w-full">
              <form method="dialog w-full">
                <button type="button" onClick={handleUpdateUser} className="btnLVT w-full font-thin">Cập Nhật</button>
              </form>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop w-full h-full absolute inset-1 cursor-pointer">
            <button type="button" onClick={closeModal}>close</button>
          </form> 
        </dialog>


    </div>
  )
}
