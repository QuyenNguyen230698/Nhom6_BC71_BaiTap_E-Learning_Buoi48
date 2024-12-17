import React, { useState, useEffect } from "react";
import { turnOffLoading } from "../../redux/loadingSlice";
import { adminService, VlearningService } from "../../../services/Vlearning";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import AccountListCourse from "./AccountListCourse";
import AccountListUser from "./AccountListUser";
import { useFormik } from "formik";

export default function AccountAdmin() {
  const [listAccount, setListAccount] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listCourse, setListCourse] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemsPerPage = 30;
  const [formData, setFormData] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maNhom: "GP01", // Giá trị mặc định
    email: "",
    maLoaiNguoiDung: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //#region add Course
  const formik = useFormik({
    initialValues: {
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
      hinhAnh: "",
    },
    onSubmit: (values) => {
      let dataUser = JSON.parse(localStorage.getItem("DATA_USER"));
      values.taiKhoanNguoiTao = dataUser.taiKhoan;

      let formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }
      VlearningService.addCourse(formData)
        .then((result) => {
          dispatch(turnOffLoading());
          message.success("Success");
          reloadCourseList();
        })
        .catch((err) => {
          console.log(formData);
          message.error("Thông tin khoá học không hợp lệ");
          console.log(err);
          dispatch(turnOffLoading());
        });
    },
  });
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
          const fileExtension = file.type.split("/")[1];
          const blobUrlWithExtension = `${blobUrl}.${fileExtension}`;
          setPreviewImage(blobUrlWithExtension);
          formik.setFieldValue("hinhAnh", blobUrlWithExtension);
        };
      } else {
        message.error("Image size must be less than 1 MB");
        e.target.value = null;
      }
    } else {
      message.error(
        "Please upload a valid image file (PNG, JPEG, GIF, or JPG)"
      );
      e.target.value = null;
    }
  };
  //#endregion

  //#region add users
  const addUsersAdmin = (event) => {
    event.preventDefault();
    const dataUpdate = {
      taiKhoan: formData.taiKhoan,
      matKhau: formData.matKhau,
      hoTen: formData.hoTen,
      soDT: formData.soDT,
      email: formData.email,
      maNhom: "GP01",
      maLoaiNguoiDung: formData.maLoaiNguoiDung,
    };
    adminService
      .addUsers(dataUpdate)
      .then((result) => {
        message.success("Thêm Người Dùng Thành Công");
        reloadUserList();
        dispatch(turnOffLoading());
      })
      .catch((err) => {
        message.error("Thêm thất bại, vui lòng thử lại");
        dispatch(turnOffLoading());
      });
  };
  //#endregion

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
    adminService
      .deleteUsers(taiKhoan)
      .then((result) => {
        message.success("Xoá tài khoản thành công");
        reloadUserList();
        dispatch(turnOffLoading());
      })
      .catch((err) => {
        message.error("Người dùng đã được ghi danh, không thể xoá!");
        reloadUserList();
        dispatch(turnOffLoading());
      });
  };

  //#region update user
  const pushData = (taiKhoan) => {
    if (!copiedListAccount.length) {
      message.error("copiedListAccount is empty");
      return;
    }
    let findUser = copiedListAccount.find((item) => item.taiKhoan === taiKhoan);
    if (findUser) {
      setFormData({
        taiKhoan: findUser.taiKhoan || "",
        matKhau: findUser.matKhau || "",
        hoTen: findUser.hoTen || "",
        soDT: findUser.soDT || "",
        maNhom: "GP01",
        email: findUser.email || "",
        maLoaiNguoiDung: findUser.maLoaiNguoiDung || "",
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
      maLoaiNguoiDung: formData.maLoaiNguoiDung,
    };

    adminService
      .updateUserCourse(JSON.stringify(dataUpdate))
      .then((response) => {
        if (response.success) {
          setListAccount((prevList) =>
            prevList.map((user) =>
              user.taiKhoan === formData.taiKhoan
                ? { ...user, ...formData }
                : user
            )
          );
          message.success("Cập nhật thông tin thành công");
          reloadUserList();
          dispatch(turnOffLoading());
        } else {
          message.success("Cập nhật thông tin thành công");
          reloadUserList();
          dispatch(turnOffLoading());
        }
        dispatch(turnOffLoading());
      })
      .catch((error) => {
        dispatch(turnOffLoading());
        message.error("Có lỗi xảy ra khi cập nhật thông tin");
        console.error(error);
      });
    window.location.href = "/accountAdmin";
  };
  //#endregion

  const [copiedListAccount, setCopiedListAccount] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  const reloadUserList = () => {
    adminService
      .getListUser()
      .then((result) => {
        setListAccount(result.data);
        setCopiedListAccount(result.data);
        dispatch(turnOffLoading());
      })
      .catch((err) => {
        dispatch(turnOffLoading());
      });
  };
  const reloadCourseList = () => {
    VlearningService.getListCourse()
      .then((result) => {
        setListCourse(result.data);
        dispatch(turnOffLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(turnOffLoading());
      });
  };

  useEffect(() => {
    const dataUser = JSON.parse(localStorage.getItem("DATA_USER"));
    if (dataUser.maLoaiNguoiDung !== "GV") {
      message.warning(
        "Tài khoản của bạn không có quyền truy cập chức năng này"
      );
      navigate("/");
    }
    reloadCourseList();
    reloadUserList();
  }, []);

  const handleAddUserClick = () => {
    setActiveButton("add");
    document.getElementById("my_modal_1").showModal();
  };

  const handleEditUserClick = (taiKhoan) => {
    pushData(taiKhoan);
    setActiveButton("update");
    document.getElementById("my_modal_1").showModal();
  };

  const handleAddCourse = () => {
    formik.handleSubmit();
  };
  const [searchuser, setSearchUser] = useState([]);
  //Search Users
  const autoSearchUser = async(event) => {
    let dataUser = JSON.parse(localStorage.getItem("DATA_USER"));
    const searchFilter = async (data) => {
      const responsive = await fetch(
        `https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${data}`,
        {
          method: "GET",
          headers: {
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJUcmFpbmluZyBnaeG6o25nIHZpw6puIGN5YmVyc29mdCAyMDIyIiwiSGV0SGFuU3RyaW5nIjoiMzAvMTEvMjAyOCIsIkhldEhhblRpbWUiOiIxODU5MTU1MjAwMDAwIiwibmJmIjoxNTg0MjkxNjAwLCJleHAiOjE4NTkzMDI4MDB9.9nOWAOoO7NtipuO-A-4_8kwzVp7j5HSdXjEegqTgcXI",
            Authorization: `Bearer ${dataUser?.accessToken || ""}`,
            "Content-Type": "application/json",
          },
        }
      );
      return responsive.json();
    };
    setSearchUser(await searchFilter(event.target.value));
  };
  const clearInput = () => {
    setSearchUser("");
  };
  //Search Course
  const autoSearch = async (event) => {
    let dataUser = JSON.parse(localStorage.getItem("DATA_USER"));
    const searchFilter = async (data) => {
      const responsive = await fetch(
        `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${data}`,
        {
          method: "GET",
          headers: {
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJUcmFpbmluZyBnaeG6o25nIHZpw6puIGN5YmVyc29mdCAyMDIyIiwiSGV0SGFuU3RyaW5nIjoiMzAvMTEvMjAyOCIsIkhldEhhblRpbWUiOiIxODU5MTU1MjAwMDAwIiwibmJmIjoxNTg0MjkxNjAwLCJleHAiOjE4NTkzMDI4MDB9.9nOWAOoO7NtipuO-A-4_8kwzVp7j5HSdXjEegqTgcXI",
            Authorization: `Bearer ${dataUser?.accessToken || ""}`,
            "Content-Type": "application/json",
          },
        }
      );
      return responsive.json();
    };
    setSearchUser(await searchFilter(event.target.value));
  };

  return (
    <div className="py-20 flex flex-col gap-6 w-full h-full bg-home">
      <div className="w-full flex flex-wrap items-center container mx-auto gap-2">
        <button onClick={handleAddUserClick} className="btn btn-success">
          Thêm Người Dùng
        </button>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="btn btn-error"
        >
          Thêm khoá Học
        </button>
        <button
          className={`btn btn-primary ${
            showPersonalInfo ? "font-bold uppercase text-green-500" : ""
          }`}
          onClick={() => {
            setShowPersonalInfo(true);
            clearInput();
          }}
        >
          Quản lí người dùng
        </button>
        <button
          className={`btn btn-warning ${
            !showPersonalInfo ? "font-bold uppercase text-green-500" : ""
          }`}
          onClick={() => {
            setShowPersonalInfo(false);
            clearInput();
          }}
        >
          Quản lí khóa học
        </button>
        {showPersonalInfo ? (
          <div className="join items-center justify-center">
            <input
              onChange={autoSearchUser}
              className="input input-bordered join-item text-gray-400"
              placeholder="Search"
            />
            <button
              onClick={clearInput}
              className="btn join-item text-gray-400"
            >
              Clear
            </button>
          </div>
        ) : (
          <div className="join items-center justify-center">
            <input
              onChange={autoSearch}
              className="input input-bordered join-item text-gray-400"
              placeholder="Search"
            />
            <button
              onClick={clearInput}
              className="btn join-item text-gray-400"
            >
              Clear
            </button>
          </div>
        )}
      </div>
      {showPersonalInfo ? (
        <AccountListUser
          searchuser={searchuser}
          currentItems={currentItems}
          indexOfFirstItem={indexOfFirstItem}
          handleEditUserClick={handleEditUserClick}
          handleDeleteUsers={handleDeleteUsers}
        />
      ) : (
        <AccountListCourse
          searchuser={searchuser}
          onButtonClick={reloadCourseList}
          listCourse={listCourse}
          previewImage={previewImage}
        />
      )}
      <div className="join w-full bg-white rounded-none text-black-gray container mx-auto flex flex-wrap items-center justify-center lg:justify-end">
        <button
          className="join-item btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        <button className="join-item btn">Page {currentPage}</button>
        <button
          className="join-item btn"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>

      {/* modal Admin */}
      <dialog
        id="my_modal_1"
        className="modal w-full h-auto flex justify-center items-center backdrop-blur-xl "
      >
        <div className="h-auto pt-6 pb-24 px-10 w-full max-w-2xl bg-white rounded-md z-50">
          <div className="grid grid-cols-2 gap-2 items-start leading-none h-auto w-11/12">
            <div className="flex w-full col-span-2 justify-end">
              <form method="dialog">
                <button className="btnLVT">x</button>
              </form>
            </div>

            <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                tài khoản
              </label>
              <input
                disabled
                type="text"
                name="taiKhoan"
                value={formData.taiKhoan}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                placeholder="Nhập họ tên"
                required
              />
            </div>

            <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                Họ tên
              </label>
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

            <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                Mật khẩu
              </label>
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

            <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                Số điện thoại
              </label>
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

            <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                Email
              </label>
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
            <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                Người dùng
              </label>
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
            {activeButton === "update" && (
              <form method="dialog w-full">
                <button
                  onClick={handleUpdateUser}
                  className="btnLVT w-full font-thin"
                >
                  Cập Nhật
                </button>
              </form>
            )}
            {activeButton === "add" && (
              <form method="dialog w-full">
                <button
                  onClick={addUsersAdmin}
                  className="btnLVT w-full font-thin"
                >
                  Thêm Người Dùng
                </button>
              </form>
            )}
          </div>
        </div>
        <form
          method="dialog"
          className="modal-backdrop w-full h-full absolute inset-1 cursor-pointer"
        >
          <button>close</button>
        </form>
      </dialog>
      {/* modal Course */}
      <dialog
        id="my_modal_2"
        className="modal w-full h-auto flex justify-center items-center backdrop-blur-xl "
      >
        <div className="h-full min-h-screen lg:h-auto overflow-y-auto pt-6 pb-24 px-10 w-full max-w-2xl bg-white rounded-md z-50">
          <div className="grid grid-cols-2 gap-2 items-start leading-none h-auto w-11/12">
            <div className="flex w-full col-span-2 justify-end">
              <form method="dialog">
                <button className="btnLVT">x</button>
              </form>
            </div>

            <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                Mã Khoá Học
              </label>
              <input
                type="text"
                name="maKhoaHoc"
                value={formik.maKhoaHoc}
                onChange={formik.handleChange}
                className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                placeholder="Nhập mã khoá học"
                required
              />
            </div>
            <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                Danh Mục Khoá Học
              </label>
              <select
                name="maDanhMucKhoaHoc"
                value={formik.maDanhMucKhoaHoc}
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
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                Tên Khoá Học
              </label>
              <input
                type="text"
                name="tenKhoaHoc"
                value={formik.tenKhoaHoc}
                onChange={formik.handleChange}
                className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                placeholder="Nhập tên khoá học"
                required
              />
            </div>
            <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                Ngày Tạo
              </label>
              <input
                type="text"
                name="ngayTao"
                format={"DD/MM/YYYY"}
                value={formik.ngayTao}
                onChange={formik.handleChange}
                className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                placeholder="Nhập ngày tạo DD/MM/YYYY"
                required
              />
            </div>
            <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                Đánh Giá
              </label>
              <input
                type="number"
                name="danhGia"
                value={formik.danhGia}
                onChange={formik.handleChange}
                className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                placeholder="Nhập Số Đánh Giá"
                required
              />
            </div>
            <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                Lượt Xem
              </label>
              <input
                type="number"
                name="luotXem"
                value={formik.luotXem}
                onChange={formik.handleChange}
                className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                placeholder="Nhập Số Lượt xem"
                required
              />
            </div>
            <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                Bí Danh
              </label>
              <input
                type="text"
                name="biDanh"
                value={formik.biDanh}
                onChange={formik.handleChange}
                className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                placeholder="Nhập bí danh"
                required
              />
            </div>
            <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                Mã Nhóm
              </label>
              <select
                name="maNhom"
                value={formik.maNhom}
                onChange={formik.handleChange}
                className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                required
              >
                <option value="">Mã Nhóm</option>
                <option value="GP01">GP01</option>
              </select>
            </div>
            <div className="mb-2 col-span-2 lg:col-span-1 flex flex-col gap-1">
              <label className="block mb-2 text-sm font-semibold text-black-gray">
                Mô tả
              </label>
              <input
                type="text"
                name="moTa"
                value={formik.moTa}
                onChange={formik.handleChange}
                className="w-full px-4 py-3 border rounded focus:outline-none bg-white"
                placeholder="Nhập mô tả"
                required
              />
            </div>
            <div className="mb-2 col-span-2 h-full items-center justify-center lg:col-span-1 flex flex-col gap-1">
              <input
                type="file"
                onChange={handleFileChange}
                className="file-input file-input-bordered file-input-sm w-full max-w-sm"
              />
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
            <form
              method="dialog w-full"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission
                handleAddCourse(); // Call the existing function
              }}
            >
              <button type="submit" className="btnLVT w-full font-thin">
                Thêm Khoá Học
              </button>
            </form>
          </div>
        </div>
        <form
          method="dialog"
          className="modal-backdrop w-full h-full absolute inset-1 cursor-pointer"
        >
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
