import React from "react";

const Profile = () => {
  return (
    <div className="bg-[##eaf4ff42]">
      <div className="px-[20%] py-[50px]">
        <h3 className="text-blue-400 text-2xl font-bold border-b-2 mb-4  ">
          THÔNG TIN CÁ NHÂN
        </h3>
        <div className="flex">
          <div className="w-[50%]">
            <form>
              <div className="flex mb-2 ">
                <label className="min-w-[30%] text-right">
                  Tên người dùng:{" "}
                </label>
                <input
                  className="border-[1px] border-solid border-blue-200	ml-2"
                  style={{ flex: 1 }}
                  type="text"
                />
              </div>
              <div className="flex mb-2 ">
                <label className="min-w-[30%] text-right">Mã số: </label>
                <input
                  className="border-[1px] border-solid border-blue-200	ml-2"
                  style={{ flex: 1 }}
                  type="text"
                />
              </div>
              <div className="flex mb-2 ">
                <label className="min-w-[30%] text-right">Ngày sinh: </label>
                <input
                  className="border-[1px] border-solid border-blue-200	ml-2"
                  style={{ flex: 1 }}
                  type="text"
                />
              </div>
              <div className="flex mb-2 ">
                <label className="min-w-[30%] text-right">CMND/CCCD: </label>
                <input
                  className="border-[1px] border-solid border-blue-200	ml-2"
                  style={{ flex: 1 }}
                  type="text"
                />
              </div>
              <div className="flex mb-2 ">
                <label className="min-w-[30%] text-right">Email: </label>
                <input
                  className="border-[1px] border-solid border-blue-200	ml-2"
                  style={{ flex: 1 }}
                  type="text"
                />
              </div>
            </form>
          </div>
          <div className="w-[50%] text-center">
            <div className="w-[30%] m-auto border-[1px] text-center">
              <img
                src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                alt=""
              />
              <p>Thay đổi Avartar</p>
            </div>
            <p>(Kích thước tốt nhất là cao 155px, rộng 147px)</p>
          </div>
        </div>
        <h3 className="text-blue-400 text-xl font-bold border-b-2 mb-4  ">
          Địa chỉ hiện tại
        </h3>
        <div className="flex">
          <div className="w-[50%]">
            <form>
              <div className="flex mb-2 ">
                <label className="min-w-[30%] text-right">
                  Địa chỉ/Tổ/Thôn:{" "}
                </label>
                <input
                  className="border-[1px] border-solid border-blue-200	ml-2"
                  style={{ flex: 1 }}
                  type="text"
                />
              </div>
              <div className="flex mb-2 ">
                <label className="min-w-[30%] text-right">Phường/Xã: </label>
                <input
                  className="border-[1px] border-solid border-blue-200	ml-2"
                  style={{ flex: 1 }}
                  type="text"
                />
              </div>
              <div className="flex mb-2 ">
                <label className="min-w-[30%] text-right">Quận/Huyện: </label>
                <input
                  className="border-[1px] border-solid border-blue-200	ml-2"
                  style={{ flex: 1 }}
                  type="text"
                />
              </div>
              <div className="flex mb-2 ">
                <label className="min-w-[30%] text-right">
                  Tỉnh/Thành phố:{" "}
                </label>
                <input
                  className="border-[1px] border-solid border-blue-200	ml-2"
                  style={{ flex: 1 }}
                  type="text"
                />
              </div>
              <div className="flex mb-2 ">
                <label className="min-w-[30%] text-right">Quốc gia: </label>
                <input
                  className="border-[1px] border-solid border-blue-200	ml-2"
                  style={{ flex: 1 }}
                  type="text"
                />
              </div>
              <div className="flex mb-2 ">
                <label className="min-w-[30%] text-right">Điện thoại: </label>
                <input
                  className="border-[1px] border-solid border-blue-200	ml-2"
                  style={{ flex: 1 }}
                  type="text"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
