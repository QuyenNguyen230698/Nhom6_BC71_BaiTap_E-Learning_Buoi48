import React, { useState, useEffect } from 'react'
import { turnOffLoading } from '../../redux/loadingSlice';
import { adminService } from '../../../services/Vlearning';
import { useDispatch } from 'react-redux';

export default function AccountAdmin() {
    const [listAccount, setListAccount] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch()
    const itemsPerPage = 30;

    useEffect(() => {
        adminService.getListUser().then((result) => {
            setListAccount(result.data);
            dispatch(turnOffLoading())
        }).catch((err) => {
            dispatch(turnOffLoading())
        });
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = listAccount?.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil((listAccount?.length || 0) / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='py-20 flex flex-col gap-10 w-full h-full'>
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
                                        <button className="btn btn-warning btn-xs">Sửa</button>
                                        <button className="btn btn-error btn-xs">Xóa</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="join w-full bg-white rounded-none text-black-gray container mx-auto flex flex-wrap items-center justify-center lg:justify-end">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        className={`join-item rounded-none btn ${currentPage === index + 1 ? 'btn-active' : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}
