import React from 'react';
import UserCommon from '../common';

function Account() {
  const UserName = sessionStorage.getItem('User');
  const SetUserName = JSON.parse(UserName);

  return (
    <div className="w-3/4 mx-auto grid grid-cols-3 gap-6 my-[50px]">
      <UserCommon />
      <div className="col-span-2">
        <h2 className="uppercase absolute left-[48%] text-[24px] font-semibold text-red-600">
          Chào mừng {SetUserName ? SetUserName.username : ''}
        </h2>
        <div className="mt-[50px] w-[80%] ">
          <div className="border-2 border-gray-200 py-3 pl-3 rounded-xl mb-5">
            <input type="text" placeholder="Họ và tên" />
          </div>
          <div className="border-2 border-gray-200 py-3 pl-3 rounded-xl mb-5">
            <input type="text" placeholder="Số điện thoại" />
          </div>
          <div className="border-2 border-gray-200 py-3 pl-3 rounded-xl mb-5">
            <input type="text" placeholder="Email" />
          </div>
          <div className="border-2 border-gray-200 py-3 pl-3 rounded-xl mb-5">
            <input type="text" placeholder="Địa chỉ" />
          </div>
          <h3 className="uppercase font-semibold mt-[20px] text-[18px]">Thay đổi mật khẩu</h3>
          <div className="border-2 border-gray-200 py-3 pl-3 rounded-xl mb-5">
            <input type="text" placeholder="Mật khẩu hiện tại" />
          </div>
          <div className="border-2 border-gray-200 py-3 pl-3 rounded-xl mb-5">
            <input type="text" placeholder="Mật khẩu mới" />
          </div>
          <div className="border-2 border-gray-200 py-2 pl-2 rounded-xl mb-4">
            <input type="text" placeholder="Xác nhận mật khẩu" />
          </div>
        </div>
        <button
          className="border-2 border-solid border-red-500 w-[80%] text-[20px] text-red-600 uppercase 
            font-semibold py-4 rounded-xl hover:bg-red-500 hover:text-white"
        >
          Cập nhật
        </button>
      </div>
    </div>
  );
}

export default Account;
