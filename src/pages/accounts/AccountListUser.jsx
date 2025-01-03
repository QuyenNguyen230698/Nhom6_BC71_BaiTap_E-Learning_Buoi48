import React, { useState } from 'react'


export default function AccountListUser({currentItems,indexOfFirstItem,handleEditUserClick,handleDeleteUsers,searchuser}) {
    
  return (
    <div data-aos="fade-up" data-aos-delay="100" className="overflow-x-auto w-full px-6 mx-auto">

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
            {(searchuser.length > 0 ? searchuser : currentItems)?.map((user, index) => (
                    <tr key={user.taiKhoan}>
                        <th>{indexOfFirstItem + index + 1}</th>
                        <td>{user.taiKhoan}</td>
                        <td>{user.hoTen}</td>
                        <td>{user.email}</td>
                        <td>{user.soDt}</td>
                        <td>{user.maLoaiNguoiDung}</td>
                        <td>
                            <div className="flex gap-2">
                                <button type='button'
                                    onClick={() => handleEditUserClick(user.taiKhoan)} 
                                    className="btn btn-warning btn-xs"
                                >
                                    Sửa
                                </button>
                                <button type='button' onClick={()=>handleDeleteUsers(user.taiKhoan)}  className="btn btn-error btn-xs">Xóa</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
