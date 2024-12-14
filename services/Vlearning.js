import { http } from "./config"


//#region API Course
export let VlearningService = {
    getListCourse: () => {
        return http.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
    },
    getCourseCatalog: () => {
        return http.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
    },
    getCourseDetail: (maDanhMuc) => {
        return http.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`)
    },
    getCoursePagination: () => {
        return http.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=10&MaNhom=GP01")
    },
    getCourseProduct:(maKhoaHoc) => {
        return http.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    }
}
//#endregion

//#region API Admin
export let adminService = {
    loginUser: (data) => {
        return http.post("/api/QuanLyNguoiDung/DangNhap",data)
    },
    registerUser: (data) => {
        return http.post("/api/QuanLyNguoiDung/DangKy",data)
    },
    getListUser: () => {
        return http.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
    },
    getUserDetail: (TaiKhoan) => {
        return http.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`,TaiKhoan)
    },
    getUserDetailByAccount: (account) => {
        return http.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${account}`)
    },
    deleteSignupCourse: (data) => {
        return http.post(`/api/QuanLyKhoaHoc/HuyGhiDanh`,data)
    },
    updateUserCourse: (data) => {
        return http.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,data)
    },
    registerCourse: (data) => {
        return http.post(`/api/QuanLyKhoaHoc/DangKyKhoaHoc`,data)
    },
    addUsers: (data) => {
        return http.post(`/QuanLyNguoiDung/ThemNguoiDung`,data)
    },
    deleteUsers: (taiKhoan) => {
        return http.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    },





    deleteUser: (user) => {
        return http.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`);
    },
    findUser: () => {
        return http.get("/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP00")
    },
    updateUser: (data) => {
        return http.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",data)
    },
    deleteMovie: (maPhim) => {
        return http.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
    },
    addMovie: (formData) => {
        return http.post(`/api/QuanLyPhim/ThemPhimUploadHinh`,formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
    },
    editMovie: (formData) => {
        return http.post(`/api/QuanLyPhim/CapNhatPhimUpload`,formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
    },
    getTheaterSystem: () => {
        return http.get("/api/QuanLyRap/LayThongTinHeThongRap")
    },
    getTheater: (maHeThongRap) => {
        return http.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    },
    addShow: (formData) => {
        return http.post("/api/QuanLyDatVe/TaoLichChieu", formData)
    }
}
//#endregion
