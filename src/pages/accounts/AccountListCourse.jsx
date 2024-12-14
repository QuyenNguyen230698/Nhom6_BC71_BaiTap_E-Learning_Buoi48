import React from 'react'
import { VlearningService } from '../../../services/Vlearning'
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { turnOffLoading } from '../../redux/loadingSlice';

export default function AccountListCourse({ listCourse }) {
    const dispatch = useDispatch()

    const handleDeleteCourse = (maKhoaHoc) => {
        VlearningService.deleteCourse(maKhoaHoc).then((result) => {
            message.success("Xoá Khoá Học Thành Công")
            dispatch(turnOffLoading())
        }).catch((err) => {
            message.error("Khóa học đã ghi danh học viên không thể xóa!")
            dispatch(turnOffLoading())
        });
    }
    return (
        <div data-aos="fade-up" data-aos-delay="100" className="overflow-x-auto w-full px-6 mx-auto">
            <table className="table table-xs">
                <thead>
                    <tr className='text-black-gray text-base'>
                        <th>Stt</th>
                        <th>Mã khóa học</th>
                        <th>Tên khóa học</th>
                        <th>Hình ảnh</th>
                        <th>Lượt xem</th>
                        <th>Người tạo</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody className='w-full'>
                    {listCourse?.map((user, index) => (
                        <tr key={user.maKhoaHoc}>
                            <th>{index + 1}</th>
                            <td>{user.maKhoaHoc}</td>
                            <td>{user.tenKhoaHoc}</td>
                            <td className='line-clamp-1 max-w-40'>{user.hinhAnh}</td>
                            <td>{user.luotXem}</td>
                            <td>{user.ngayTao}</td>
                            <td>
                                <div className="flex gap-2">
                                    <button className="btn btn-warning btn-xs">
                                        Sửa
                                    </button>
                                    <button onClick={()=>handleDeleteCourse(user.maKhoaHoc)} className="btn btn-error btn-xs">Xóa</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
