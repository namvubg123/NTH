import React, { useState } from 'react';
import UserCommon from '../common';
import { Form, message } from 'antd';
import { updateUser } from '../../api/users';

function Account() {
  const UserName = sessionStorage.getItem('User');
  const SetUserName = JSON.parse(UserName);

  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleUpdateClick = async () => {
    message.success('Thay đổi thông tin thành công, đăng nhập lại để thấy sự thay đổi');
    const userInfo = {
      lastName,
      phone,
      email,
      address,
    };

    const response = await updateUser(SetUserName?._id, userInfo);
    console.log(response);
  };

  return (
    <div className="w-3/4 mx-auto grid grid-cols-3 gap-6 my-[50px]">
      <UserCommon />
      <Form className="col-span-2">
        <h2 className="uppercase absolute left-[48%] text-[24px] font-semibold text-red-600">
          Chào mừng {SetUserName ? SetUserName.username : ''}
        </h2>
        <div className="mt-[50px] w-[80%] ">
          <div className="border-2 border-gray-200 py-3 pl-3 rounded-xl mb-5">
            <input
              type="text"
              placeholder={SetUserName ? SetUserName.lastName : ''}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="border-2 border-gray-200 py-3 pl-3 rounded-xl mb-5">
            <input
              type="text"
              placeholder={SetUserName ? SetUserName.phone : ''}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="border-2 border-gray-200 py-3 pl-3 rounded-xl mb-5">
            <input
              type="text"
              placeholder={SetUserName ? SetUserName.email : ''}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="border-2 border-gray-200 py-3 pl-3 rounded-xl mb-5">
            <input
              type="text"
              placeholder={SetUserName ? SetUserName.address : ''}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <button
          className="border-2 border-solid border-red-500 w-[80%] text-[20px] text-red-600 uppercase 
            font-semibold py-4 rounded-xl hover:bg-red-500 hover:text-white"
          onClick={handleUpdateClick}
        >
          Cập nhật
        </button>
      </Form>
    </div>
  );
}

export default Account;
