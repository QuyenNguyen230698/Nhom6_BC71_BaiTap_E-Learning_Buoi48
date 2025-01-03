import { message } from "antd";
import React, { useEffect, useState } from "react";

export default function Return() {
  const [dataCart, setDataCart] = useState({});

  const formatCurrency = (amount) => {
    const formattedAmount = (amount / 100).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return formattedAmount;
  };

  const checkPaymentStatusFromUrl = async () => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    const vpc_MerchTxnRef = params.get("vpc_MerchTxnRef");
    const urlResponse = window.location.href;

    if (!vpc_MerchTxnRef) {
      error.value =
        "Thiếu thông tin cần thiết để kiểm tra trạng thái giao dịch";
      return;
    }

    try {
      const response = await fetch("https://api.jobspeeds.com/payment/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vpc_MerchTxnRef, urlResponse }),
      });

      const data = await response.json();

      if (data.result) {
        setDataCart(data.data);
        if (dataCart.length > 0) {
          message.success("Đăng ký khóa học thành công");
        } else {
          message.error("Bạn đã huỷ thanh toán khóa học");
        }
      } else {
      }
    } catch (err) {
    } finally {
    }
  };
  useEffect(() => {
    checkPaymentStatusFromUrl();
  }, []);

  let dataUser = JSON.parse(localStorage.getItem("DATA_USER"));

  return (
    <div className="bg-white text-black-gray h-full w-full flex items-center justify-center py-20">
      <div className="w-full max-w-lg h-auto flex flex-col container mx-auto gap-2 lg:gap-4 items-center justify-center overflow-hidden shadow-xl">
        <div className="bg-orange-500 items-center justify-center text-3xl font-bold py-3 text-white flex min-w-full">
          V-LEARNING
        </div>
        <div className="text-center text-2xl p-0 text-black-gray">
          Hóa Đơn Thanh Toán
        </div>
        <div className="flex flex-col px-3 gap-2 h-fit w-full items-center justify-center">
          <div className="flex flex-row justify-between items-center w-full border-b container mx-auto">
            <h2 className="font-bold text-xl">Email:</h2>
            <p className="text-black-gray">{dataUser.email}</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full border-b container mx-auto">
            <h2 className="font-bold text-xl">Họ Tên:</h2>
            <p className="text-black-gray">{dataUser.hoTen}</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full border-b container mx-auto">
            <h2 className="font-bold text-xl">Tài Khoản:</h2>
            <p className="text-black-gray">{dataUser.taiKhoan}</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full border-b container mx-auto">
            <h2 className="font-bold text-xl">Tên Loại Người Dùng:</h2>
            <p className="text-black-gray">
              {dataUser.maLoaiNguoiDung === "HV"
                ? "Học Viên"
                : dataUser.maLoaiNguoiDung === "GV"
                ? "Giáo Viên"
                : users.tenLoaiNguoiDung}
            </p>
          </div>
          {/* dataCart */}
          <div className="flex flex-row justify-between items-center w-full mx-3 border-b container mx-auto">
            <h2 className="font-bold text-xl">Số Tiền:</h2>
            <p className="text-black-gray">
              {formatCurrency(dataCart.vpc_Amount)}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center w-full mx-3 border-b container mx-auto">
            <h2 className="font-bold text-xl">Số thẻ:</h2>
            <p className="text-black-gray">{dataCart.vpc_CardNum}</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full mx-3 border-b container mx-auto">
            <h2 className="font-bold text-xl">Trạng thái:</h2>
            <p className="text-black-gray">{dataCart.vpc_Message}</p>
          </div>
        </div>
        <div className="w-full items-center justify-center flex min-w-full py-2">
          <a href="/" className="btn btn-warning">
            Về trang chủ
          </a>
        </div>
      </div>
    </div>
  );
}
