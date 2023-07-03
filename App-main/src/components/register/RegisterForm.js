import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';
import { notification } from 'antd';

function RegisterForm() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const valueRegister = {
    username,
    email,
    password,
  };
  const handleRegister = (values) => {
    console.log(values);
    registerUser(values).then(
      (res) => {
        console.log(res);
        notification.success({ message: ' Đăng kí thành công ' });
        navigate(`/login`);
      },
      (err) => {
        console.log(err);
        if (err) {
          notification.error({ message: ' Đăng kí thất bại' });
        }
      }
    );
  };
  return (
    <div className="w-[40%] mx-auto mt-[20px] min-h-[50vh]">
      <h2 className="text-red-600 text-center text-[30px]">Đăng ký tài khoản</h2>
      <div className="border-2 border-gray-300 rounded-sm p-3 my-[20px] hover:border-red-300 hover:shadow-lg">
        <input
          name="useName"
          placeholder="Nhập tên người dùng"
          className="outline-none"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="border-2 border-gray-300 rounded-sm p-3 my-[20px] hover:border-red-300 hover:shadow-lg">
        <input
          name="email"
          placeholder="Nhập email"
          className="outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="border-2 border-gray-300 rounded-sm p-3 my-[20px] hover:border-red-300 hover:shadow-lg">
        <input
          name="text"
          placeholder="Mật khẩu"
          type="password"
          className="outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-between">
        <div className="bg-red-600 w-56 text-center font-semibold cursor-pointer">
          <button className="uppercase cursor-pointer text-white my-6" onClick={() => handleRegister(valueRegister)}>
            Đăng ký
          </button>
        </div>
        <div>
          <p>
            Bạn đã có tài khoản?
            <Link to="/login">
              <nav className="text-red-600">Đăng nhập</nav>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
