import React, { useState, useEffect } from 'react'
import { turnOffLoading } from '../../redux/loadingSlice';
import { adminService } from '../../../services/Vlearning';

export default function AccountAdmin() {
    const [listAccount, setListAccount] = useState([]);

    useEffect(() => {
        adminService.getListUser().then((result) => {
            setListAccount(result.data);
            turnOffLoading()
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    return (
        <div className='py-20'>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tài khoản</th>
                            <th>Họ tên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Loại người dùng</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listAccount.map((user, index) => (
                            <tr key={user.taiKhoan}>
                                <th>{index + 1}</th>
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
        </div>
    )
}
