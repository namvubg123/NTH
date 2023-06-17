import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';
import Cookies from 'js-cookie';
import { notification } from 'antd';

function LoginForm(props) {
  const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const valueLogin = {
    username,
    password,
  };

  const onFinish = (values) => {
    // console.log('Success:', values);
    loginUser(values).then((res) => {
      if (res.status === 200) {
        Cookies.set('token', res.data.token);

        setUser(res.data);

        if (res.data.isAdmin === true) {
          notification.success({ message: 'Đăng nhập thành công' });
          navigate(`/admin`);
        } else {
          sessionStorage.setItem('User', JSON.stringify(res.data));
          notification.success({ message: 'Đăng nhập thành công' });
          navigate(`/`);
          window.location.reload();
        }
      }
    });
  };

  return (
    <div className="w-[40%] mx-auto mt-[20px] min-h-[50vh]">
      <h2 className="text-red-600 text-center text-[30px]">Đăng nhập</h2>
      <div className="border-2 border-gray-300 rounded-sm p-3 my-[20px] hover:border-red-300 hover:shadow-lg">
        <input
          name="useName"
          placeholder="Nhập username"
          className="outline-none"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
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
          <button className="uppercase cursor-pointer text-white my-6" onClick={() => onFinish(valueLogin)}>
            Đăng nhập
          </button>
        </div>
        <div>
          <p>
            Bạn chưa có tài khoản?
            <Link to="/register">
              <nav className="text-red-600">Đăng ký</nav>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
