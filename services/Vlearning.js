import { http } from "./config"

//#region API Movie
export let VlearningService = {
    getListCourse: () => {
        return http.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
    }
}
//#endregion

//#region API Admin
export let adminService = {
    getListUser: () => {
        return http.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00")
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
