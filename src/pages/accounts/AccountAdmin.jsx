import React, { useState, useEffect } from 'react'
import { turnOffLoading } from '../../redux/loadingSlice';
import { adminService } from '../../../services/Vlearning';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import event from '../event/EventPage';

export default function AccountAdmin() {
    const [listAccount, setListAccount] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showData, setShowData] = useState({})
    const [showPersonalInfo, setShowPersonalInfo] = useState(true)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const itemsPerPage = 30;
    const [formData, setFormData] = useState({
        taiKhoan: '',
        matKhau: '',
        hoTen: '',
        soDT: '',
        maNhom: 'GP01', // Giá trị mặc định
        email: '',
        maLoaiNguoiDung:''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

 //#region pagination
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = listAccount?.slice(indexOfFirstItem, indexOfLastItem);
      const totalPages = Math.ceil((listAccount?.length || 0) / itemsPerPage);
      const handlePageChange = (pageNumber) => {
          setCurrentPage(pageNumber);
      };
      //#endregion

    const handleDeleteUsers = (taiKhoan) => {
        adminService.deleteUsers(taiKhoan).then((result) => {
            message.success("Xoá tài khoản thành công");
            reloadUserList();
        }).catch((err) => {
            message.error("Người dùng đã được ghi danh, không thể xoá!");
            reloadUserList();
        });
    }

//#region update user
const pushData = (taiKhoan) => {
    if (!copiedListAccount.length) {
        message.error("copiedListAccount is empty");
        return;
    }
    let findUser = copiedListAccount.find(item => item.taiKhoan === taiKhoan);
    if (findUser) {
        setFormData({
            taiKhoan: findUser.taiKhoan || '',
            matKhau: findUser.matKhau || '',
            hoTen: findUser.hoTen || '',
            soDT: findUser.soDT || '',
            maNhom: 'GP01',
            email: findUser.email || '',
            maLoaiNguoiDung: findUser.maLoaiNguoiDung || ''
        });
    } else {
        console.error("User not found");
    }
};

const handleUpdateUser = (event) => {
    event.preventDefault();
    const dataUpdate = {
        taiKhoan: formData.taiKhoan,
        matKhau: formData.matKhau,
        hoTen: formData.hoTen,
        soDT: formData.soDT,
        email: formData.email,
        maNhom: "GP01",
        maLoaiNguoiDung: formData.maLoaiNguoiDung
    };

    adminService.updateUserCourse(JSON.stringify(dataUpdate))
    .then(response => {
        if (response.success) {
            setListAccount(prevList => prevList.map(user => 
                user.taiKhoan === formData.taiKhoan ? { ...user, ...formData } : user
            ));
            message.success("Cập nhật thông tin thành công");
        } else {
            message.error("Cập nhật thất bại");
        }
        reloadUserList()
        dispatch(turnOffLoading());
    })
    .catch(error => {
        dispatch(turnOffLoading());
        message.error("Có lỗi xảy ra khi cập nhật thông tin");
        console.error(error);
    });
};
//#endregion

    const [copiedListAccount, setCopiedListAccount] = useState([]);

    const reloadUserList = () => {
        adminService.getListUser().then((result) => {
            setListAccount(result.data);
            setCopiedListAccount(result.data);
            dispatch(turnOffLoading());
        }).catch((err) => {
            dispatch(turnOffLoading());
        });
    }

    useEffect(() => {
        const dataUser = JSON.parse(localStorage.getItem("DATA_USER"));
        if (dataUser.maLoaiNguoiDung !== "GV") {
            message.warning("Tài khoản của bạn không có quyền truy cập chức năng này");
            navigate("/");
        }
        reloadUserList();
    }, []);

    return (
        <div className='py-20 flex flex-col gap-6 w-full h-full'>
            <div className='w-full flex items-center container mx-auto gap-2'>
                <button className='btn btn-success'>Thêm Người Dùng</button>
                <button 
                className={`btn btn-primary ${showPersonalInfo ? 'font-bold uppercase text-green-500' : ''}`} 
                onClick={() => setShowPersonalInfo(true)}
                >
                Quản lí người dùng
                </button>
                <button 
                className={`btn btn-warning ${!showPersonalInfo ? 'font-bold uppercase text-green-500' : ''}`} 
                onClick={() => setShowPersonalInfo(false)}
                >
                Quản lí khóa học
                </button>
            </div>
            {showPersonalInfo ? (
                <div data-aos="fade-up" data-aos-delay="100" className="overflow-x-auto container mx-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className='text-black-gray text-base'>
                                <th>Stt</th>
                                <th>Tài khoản</th>
                                <th>Họ tên</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Loại người dùng</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                        {currentItems?.map((user, index) => (
                                <tr key={user.taiKhoan}>
                                    <th>{indexOfFirstItem + index + 1}</th>
                                    <td>{user.taiKhoan}</td>
                                    <td>{user.hoTen}</td>
                                    <td>{user.email}</td>
                                    <td>{user.soDt}</td>
                                    <td>{user.maLoaiNguoiDung}</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <button 
                                                onClick={() => {
                                                    pushData(user.taiKhoan); // Call the handleShowUpdate function
                                                    document.getElementById('my_modal_1').showModal();
                                                }} 
                                                className="btn btn-warning btn-xs"
                                            >
                                                Sửa
                                            </button>
                                            <button onClick={()=>handleDeleteUsers(user.taiKhoan)}  className="btn btn-error btn-xs">Xóa</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ):(<p className='text-center'>Quản lí khóa học</p>)}
            <div className="join w-full bg-white rounded-none text-black-gray container mx-auto flex flex-wrap items-center justify-center lg:justify-end">
                <button className="join-item btn" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>«</button>
                <button className="join-item btn">Page {currentPage}</button>
                <button className="join-item btn" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>»</button>
            </div>

            <dialog id="my_modal_1" className="modal w-full h-full flex justify-center items-center backdrop-blur-xl ">
                <div className="h-auto py-6 px-10 w-full max-w-2xl bg-white rounded-md z-50">
                    <div className="flex flex-col items-start leading-none w-full">

                    <div className="mb-6 flex flex-col gap-1">
                        <label className="block mb-2 text-sm font-semibold text-black-gray">tài khoản</label>
                        <input
                        type="text"
                        name="taiKhoan"
                        value={formData.taiKhoan}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                        placeholder="Nhập họ tên"
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
                    <div className="mb-6 flex flex-col gap-1">
                        <label className="block mb-2 text-sm font-semibold text-black-gray">Người dùng</label>
                        <select
                        name="maLoaiNguoiDung"
                        value={formData.maLoaiNguoiDung}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                        required
                        >
                            <option value="">Chọn loại người dùng</option>
                            <option value="HV">HV</option>
                            <option value="GV">GV</option>
                        </select>
                    </div>
                    </div>
                    <div className=" w-full">
                    <form method="dialog w-full">
                        <button onClick={handleUpdateUser} className="btnLVT w-full font-thin">Cập Nhật</button>
                    </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop w-full h-full absolute inset-1 cursor-pointer">
                    <button>close</button>
                </form> 
                </dialog>
        </div>
    )
}
