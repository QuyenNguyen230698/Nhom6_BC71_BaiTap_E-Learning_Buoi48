import React, { useState } from 'react'
import { VlearningService } from '../../../services/Vlearning'
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { turnOffLoading } from '../../redux/loadingSlice';

export default function AccountListCourse({ listCourse,onButtonClick,searchuser,reloadCourseList }) {
    const dispatch = useDispatch()
    const [previewImage,setPreviewImage] = useState(null)
    const [formData, setFormData] = useState({
        maKhoaHoc: "",
        biDanh: "",
        tenKhoaHoc: "",
        moTa: "",
        luotXem: 0,
        danhGia: 0,
        maNhom: "",
        ngayTao: "",
        maDanhMucKhoaHoc: "",
        taiKhoanNguoiTao: "",
        hinhAnh: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDeleteCourse = (maKhoaHoc) => {
        VlearningService.deleteCourse(maKhoaHoc).then((result) => {
            message.success("Xoá Khoá Học Thành Công")
            onButtonClick()
            reloadCourseList()
            dispatch(turnOffLoading())
        }).catch((err) => {
            dispatch(turnOffLoading())
            reloadCourseList()
            message.error("Khóa học đã ghi danh học viên không thể xóa!")
        });
    }
    let dataUser = JSON.parse(localStorage.getItem("DATA_USER"));
    const showIndex = (maKhoaHoc) => {
        const course = listCourse.find(item => item.maKhoaHoc === maKhoaHoc);
        if (course) {
            setFormData({
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

    const isValidDate = () => {
        const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        const match = formData.ngayTao.match(datePattern);
        if (!match) return false;
    
        const day = parseInt(match[1], 10);
        const month = parseInt(match[2], 10);
        const year = parseInt(match[3], 10);
    
        // Check if the date is valid
        if (month < 1 || month > 12) return false;
        const daysInMonth = new Date(year, month, 0).getDate();
        if (day < 1 || day > daysInMonth) return false;
    
        return true;
      }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData)
        if (!formData.maKhoaHoc || !formData.biDanh || !formData.tenKhoaHoc || !formData.moTa || !formData.luotXem || !formData.danhGia || !formData.maNhom || !formData.ngayTao || !formData.maDanhMucKhoaHoc) {
            closeModal3();
            message.error("Các trường thông tin không được bỏ trống!");
            return;
        }
        if (!isValidDate()) {
            closeModal3();
            message.error("Ngày tạo không đúng định dạng DD/MM/YYYY hoặc không hợp lệ!");
            return;
          }

        formData.taiKhoanNguoiTao = dataUser.taiKhoan;

        let formDataObj = new FormData();
        for (let key in formData) {
            formDataObj.append(key, formData[key]);
        }
        VlearningService.updateCourse(formDataObj).then((result) => {
            dispatch(turnOffLoading())
            closeModal3()
            message.success("Cập nhật khóa hoc thành công")
        }).then(() => {
            closeModal3()
        })
        .catch((err) => {
            dispatch(turnOffLoading())
            closeModal3()
            message.error("Thông tin khoá học không hợp lệ")
        });
    };

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
              setFormData((prevState) => ({
                ...prevState,
                hinhAnh: blobUrlWithExtension,
              }));
            };
          } else {
            closeModal3()
            message.error("Hình ảnh khóa học không được quá 1 MB");
            e.target.value = null;
          }
        } else {
            closeModal3()
          message.error("Hình ảnh khóa học phải là dạng hình ảnh (PNG, JPEG, GIF, or JPG)");
          e.target.value = null;
        }
    };

    const closeModal3 = () => {
        document.getElementById("my_modal_3").close();
    };

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
                    <div className="grid grid-cols-2 gap-2 items-start leading-none h-auto w-full">
                    <div className='flex w-full col-span-2 justify-end'>
                        <form method="dialog">
                            <button type='button' onClick={closeModal3}>x</button>
                        </form> 
                    </div>

                    <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
                        <label className="block mb-2 text-sm font-semibold text-black-gray">Mã Khoá Học</label>
                        <input
                        disabled
                        type="text"
                        name="maKhoaHoc"
                        value={formData.maKhoaHoc}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                        placeholder="Nhập mã khoá học"
                        required
                        />
                    </div>
                    <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
                        <label className="block mb-2 text-sm font-semibold text-black-gray">Danh Mục Khoá Học</label>
                        <select
                        name="maDanhMucKhoaHoc"
                        value={formData.maDanhMucKhoaHoc}
                        onChange={handleChange}
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
                        value={formData.tenKhoaHoc}
                        onChange={handleChange}
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
                        value={formData.ngayTao}
                        onChange={handleChange}
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
                        value={formData.danhGia}
                        onChange={handleChange}
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
                        value={formData.luotXem}
                        onChange={handleChange}
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
                        value={formData.biDanh}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                        placeholder="Nhập bí danh"
                        required
                        />
                    </div>
                    <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
                        <label className="block mb-2 text-sm font-semibold text-black-gray">Mã Nhóm</label>
                        <select
                        name="maNhom"
                        value={formData.maNhom}
                        onChange={handleChange}
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
                        value={formData.moTa}
                        onChange={handleChange}
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
                    <form method="dialog w-full" onSubmit={handleSubmit}>
                        <button type="submit" className="btnLVT w-full font-thin">Thêm Khoá Học</button>
                    </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop w-full h-full absolute inset-1 cursor-pointer">
                    <button type="button" onClick={closeModal3}>close</button>
                </form> 
                </dialog>
        </div>
    )
}
