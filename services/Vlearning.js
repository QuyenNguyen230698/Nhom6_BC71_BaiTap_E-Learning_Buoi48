import { http } from "./config"


//#region API Course
export let VlearningService = {
    getListCourse: () => {
        return http.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
    },
    searchCourse: (tenKhoaHoc) => {
        return http.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}`)
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
    },
    deleteCourse: (maKhoaHoc) => {
        return http.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`)
    },
    addCourse: (dataForm) => {
        return http.post(`/api/QuanLyKhoaHoc/ThemKhoaHoc`,dataForm)
    },
    updateCourse: (dataForm) => {
        return http.put(`/api/QuanLyKhoaHoc/CapNhatKhoaHoc`,dataForm)
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
        return http.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,data)
    },
    deleteUsers: (taiKhoan) => {
        return http.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    },
    searchUser:(hoTen) => {
        return http.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${hoTen}`)
    }
}
//#endregion
