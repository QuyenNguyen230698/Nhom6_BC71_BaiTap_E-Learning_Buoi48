import React, { useState } from 'react'
import { VlearningService } from '../../../services/Vlearning'
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { turnOffLoading } from '../../redux/loadingSlice';
import { useFormik } from 'formik';

export default function AccountListCourse({ listCourse,onButtonClick,searchuser }) {
    const dispatch = useDispatch()
    const [previewImage,setPreviewImage] = useState(null)
    const handleDeleteCourse = (maKhoaHoc) => {
        VlearningService.deleteCourse(maKhoaHoc).then((result) => {
            message.success("Xoá Khoá Học Thành Công")
            onButtonClick()
            dispatch(turnOffLoading())
        }).catch((err) => {
            message.error("Khóa học đã ghi danh học viên không thể xóa!")
            dispatch(turnOffLoading())
        });
    }
    let dataUser = JSON.parse(localStorage.getItem("DATA_USER"));
    const showIndex = (maKhoaHoc) => {
        const course = listCourse.find(item => item.maKhoaHoc === maKhoaHoc);
        console.log(course)
        if (course) {
            formik.setValues({
                maKhoaHoc: course.maKhoaHoc,
                biDanh: course.biDanh,
                tenKhoaHoc: course.tenKhoaHoc,
                moTa: course.moTa,
                luotXem: course.luotXem,
                danhGia: 0,
                maNhom: course.maNhom,
                ngayTao: course.ngayTao,
                maDanhMucKhoaHoc: course.danhMucKhoaHoc.maDanhMucKhoaHoc,
                taiKhoanNguoiTao: course.nguoiTao.taiKhoan,
                hinhAnh: course.hinhAnh
            });
        }
        document.getElementById('my_modal_3').showModal();
    };

    const formik = useFormik({
        initialValues:{
     maKhoaHoc: "",
     biDanh: "",
     tenKhoaHoc: "",
     moTa: "",
     luotXem: 0,
     danhGia: 0,
     maNhom: "",
     ngayTao: "",
     maDanhMucKhoaHoc: "",
     taiKhoanNguoiTao:"",
     hinhAnh: ""
    },
        onSubmit: (values) => {
         values.taiKhoanNguoiTao = dataUser.taiKhoan
 
         let formData = new FormData();
         for (let key in values) {
            formData.append(key, values[key]);
        }
         VlearningService.updateCourse(formData).then((result) => {
             dispatch(turnOffLoading())
             message.success("Success")
         }).catch((err) => {
             message.error("Thông tin khoá học không hợp lệ")
             console.log(err)
             dispatch(turnOffLoading())
         });
       }
       })
       let handleFileChange = (e) => {
        let file = e.target.files[0];
 
        if (
          file.type === "image/png" ||
          file.type === "image/jpeg" ||
          file.type === "image/gif" ||
          file.type === "image/jpg"
        ) {
          if (file.size <= 1024 * 1024) {
            let reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = (e) => {
              const blob = new Blob([e.target.result], { type: file.type });
              const blobUrl = URL.createObjectURL(blob);
              const fileExtension = file.type.split('/')[1];
              const blobUrlWithExtension = `${blobUrl}.${fileExtension}`;
              setPreviewImage(blobUrlWithExtension);
              formik.setFieldValue("hinhAnh", blobUrlWithExtension);
            };
          } else {
            message.error("Image size must be less than 1 MB");
            e.target.value = null;
          }
        } else {
          message.error("Please upload a valid image file (PNG, JPEG, GIF, or JPG)");
          e.target.value = null;
        }
       };
       const handleUpdateCourse = () => {
        formik.handleSubmit()
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
                    {(searchuser.length > 0 ? searchuser : listCourse)?.map((user, index) => (
                        <tr key={user.maKhoaHoc}>
                            <th>{index + 1}</th>
                            <td>{user.maKhoaHoc}</td>
                            <td>{user.tenKhoaHoc}</td>
                            <td className='line-clamp-1 max-w-40'>{user.hinhAnh}</td>
                            <td>{user.luotXem}</td>
                            <td>{user.ngayTao}</td>
                            <td>
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => {
                                            showIndex(user.maKhoaHoc);
                                            document.getElementById('my_modal_3').showModal();
                                        }}
                                        className="btn btn-warning btn-xs">
                                        Sửa
                                    </button>
                                    <button onClick={()=>handleDeleteCourse(user.maKhoaHoc)} className="btn btn-error btn-xs">Xóa</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <dialog id="my_modal_3" className="modal w-full h-auto flex justify-center items-center backdrop-blur-xl ">
                <div className="h-full min-h-screen lg:h-auto overflow-y-auto pt-6 pb-24 px-10 w-full max-w-2xl bg-white rounded-md z-50">
                    <div className="grid grid-cols-2 gap-2 items-start leading-none h-auto w-11/12">
                    <div className='flex w-full col-span-2 justify-end'>
                        <form method="dialog">
                            <button className='btnLVT'>x</button>
                        </form> 
                    </div>

                    <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
                        <label className="block mb-2 text-sm font-semibold text-black-gray">Mã Khoá Học</label>
                        <input
                        disabled
                        type="text"
                        name="maKhoaHoc"
                        value={formik.values.maKhoaHoc}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                        placeholder="Nhập mã khoá học"
                        required
                        />
                    </div>
                    <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
                        <label className="block mb-2 text-sm font-semibold text-black-gray">Danh Mục Khoá Học</label>
                        <select
                        name="maDanhMucKhoaHoc"
                        value={formik.values.maDanhMucKhoaHoc}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                        required
                        >
                            <option value="">Chọn Danh Mục Khoá Học</option>
                            <option value="BackEnd">Lập trình Backend</option>
                            <option value="Design">Thiết kế Web</option>
                            <option value="DiDong">Lập trình di động</option>
                            <option value="FrontEnd">Lập trình Front end</option>
                            <option value="FullStack">Lập trình Full Stack</option>
                            <option value="TuDuy">Tư duy lập trình</option>
                        </select>
                    </div>
                    <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
                        <label className="block mb-2 text-sm font-semibold text-black-gray">Tên Khoá Học</label>
                        <input
                        type="text"
                        name="tenKhoaHoc"
                        value={formik.values.tenKhoaHoc}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                        placeholder="Nhập tên khoá học"
                        required
                        />
                    </div>
                    <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
                        <label className="block mb-2 text-sm font-semibold text-black-gray">Ngày Tạo</label>
                        <input
                        type="text"
                        name="ngayTao"
                        format={"DD/MM/YYYY"}
                        value={formik.values.ngayTao}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                        placeholder="Nhập ngày tạo DD/MM/YYYY"
                        required
                        />
                    </div>
                    <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
                        <label className="block mb-2 text-sm font-semibold text-black-gray">Đánh Giá</label>
                        <input
                        type="number"
                        name="danhGia"
                        value={formik.values.danhGia}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                        placeholder="Nhập Số Đánh Giá"
                        required
                        />
                    </div>
                    <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
                        <label className="block mb-2 text-sm font-semibold text-black-gray">Lượt Xem</label>
                        <input
                        type="number"
                        name="luotXem"
                        value={formik.values.luotXem}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                        placeholder="Nhập Số Lượt xem"
                        required
                        />
                    </div>
                    <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
                        <label className="block mb-2 text-sm font-semibold text-black-gray">Bí Danh</label>
                        <input
                        type="text"
                        name="biDanh"
                        value={formik.values.biDanh}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                        placeholder="Nhập bí danh"
                        required
                        />
                    </div>
                    <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
                        <label className="block mb-2 text-sm font-semibold text-black-gray">Mã Nhóm</label>
                        <select
                        name="maNhom"
                        value={formik.values.maNhom}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                        required
                        >
                            <option value="">Mã Nhóm</option>
                            <option value="GP01">GP01</option>
                        </select>
                    </div>
                    <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
                        <label className="block mb-2 text-sm font-semibold text-black-gray">Mô tả</label>
                        <input
                        type="text"
                        name="moTa"
                        value={formik.values.moTa}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                        placeholder="Nhập mô tả"
                        required
                        />
                    </div>
                    <div className="mb-2 col-span-2 lg:col-span-1 h-full items-center justify-center flex flex-col gap-1">
                        <input type="file" onChange={handleFileChange} className="file-input file-input-bordered file-input-sm w-full max-w-sm" />
                    </div>
                    </div>
                    <div className="mt-2 col-span-2 lg:col-span-1">
                        <img
                          src={previewImage}
                          alt="Movie Poster Preview"
                          className="max-w-xs max-h-64 object-contain rounded-lg shadow-md"
                        />
                      </div>
                    <div className=" w-full">
                    <form method="dialog w-full" onSubmit={(e) => {
                        e.preventDefault();
                        handleUpdateCourse(); // Call the existing function
                    }}>
                        <button type="submit" className="btnLVT w-full font-thin">Thêm Khoá Học</button>
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
