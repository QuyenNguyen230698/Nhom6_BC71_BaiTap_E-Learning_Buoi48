import React, { useState } from 'react'


export default function AccountListUser({currentItems,indexOfFirstItem,handleEditUserClick,handleDeleteUsers,searchuser}) {
    
  return (
    <div data-aos="fade-up" data-aos-delay="100" className="overflow-x-auto w-full px-6 mx-auto">

        <table className="table table-xs">
            <thead>
                <tr className='text-black-gray text-base'>
                    <th className='animate-fade-right animate-duration-500 animate-delay-300'>Stt</th>
                    <th className='animate-fade-right animate-duration-500 animate-delay-300'>Tài khoản</th>
                    <th className='animate-fade-right animate-duration-500 animate-delay-300'>Họ tên</th>
                    <th className='animate-fade-right animate-duration-500 animate-delay-300'>Email</th>
                    <th className='animate-fade-right animate-duration-500 animate-delay-300'>Số điện thoại</th>
                    <th className='animate-fade-right animate-duration-500 animate-delay-300'>Loại người dùng</th>
                    <th className='animate-fade-right animate-duration-500 animate-delay-300'>Thao tác</th>
                </tr>
            </thead>
            <tbody>
            {(searchuser.length > 0 ? searchuser : currentItems)?.map((user, index) => (
                    <tr key={user.taiKhoan}>
                        <th className='animate-fade-right animate-duration-500 animate-delay-300'>{indexOfFirstItem + index + 1}</th>
                        <td className='animate-fade-right animate-duration-500 animate-delay-300'>{user.taiKhoan}</td>
                        <td className='animate-fade-right animate-duration-500 animate-delay-300'>{user.hoTen}</td>
                        <td className='animate-fade-right animate-duration-500 animate-delay-300'>{user.email}</td>
                        <td className='animate-fade-right animate-duration-500 animate-delay-300'>{user.soDt}</td>
                        <td className='animate-fade-right animate-duration-500 animate-delay-300'>{user.maLoaiNguoiDung}</td>
                        <td>
                            <div className="flex gap-2 animate-fade-right animate-duration-500 animate-delay-300">
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
