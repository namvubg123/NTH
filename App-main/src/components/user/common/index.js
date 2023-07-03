import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { GlobalContext } from './../../../GlobalContext';
import { Button } from 'antd';

function UserCommon() {
  const { setUser } = useContext(GlobalContext);
  const UserName = sessionStorage.getItem('User');
  const SetUserName = JSON.parse(UserName);

  const handleLogout = () => {
    Cookies.remove('token');
    setUser(null);
    sessionStorage.removeItem('User');
    localStorage.removeItem('cartItems');
  };

  return (
    <div>
      <Link
        className="grid grid-cols-[30px_minmax(200px,_1fr)] w-3/4 mx-12 p-3 border-2 border-white hover:border-2 hover:border-red-600 hover:rounded-xl"
        to="/"
      >
        <div className="pr-4">
          <i className="fa-solid fa-house-user"></i>
        </div>
        <h3 className="font-medium">Trang chủ</h3>
      </Link>
      <Link
        className="grid grid-cols-[30px_minmax(200px,_1fr)] w-3/4 mx-12 p-3 border-2 border-white hover:border-2 hover:border-red-600 hover:rounded-xl"
        to={`/account/${SetUserName?._id}`}
      >
        <div>
          <i className="fa-solid fa-user"></i>
        </div>
        <h3 className="font-medium">Tài khoản của tôi</h3>
      </Link>
      <Link
        className="grid grid-cols-[30px_minmax(200px,_1fr)] w-3/4 mx-12 p-3 border-2 border-white hover:border-2 hover:border-red-600 hover:rounded-xl"
        to="/offer"
      >
        <div>
          <i className="fa-solid fa-gift"></i>
        </div>
        <h3 className="font-medium">Ưu đãi</h3>
      </Link>
      {/* <Link
        className="grid grid-cols-[30px_minmax(200px,_1fr)] w-3/4 mx-12 p-3 border-2 border-white hover:border-2 hover:border-red-600 hover:rounded-xl"
        to={`/history/${SetUserName?._id}`}
      >
        <div>
          <i className="fa-solid fa-clipboard-list"></i>
        </div>
        <h3 className="font-medium">Lịch sử mua hàng</h3>
      </Link> */}
      <Link
        className="grid grid-cols-[30px_minmax(200px,_1fr)] w-3/4 mx-12 p-3 border-2 border-white hover:border-2 hover:border-red-600 hover:rounded-xl"
        to="/support"
      >
        <div>
          <i className="fa-solid fa-headset"></i>
        </div>
        <h3 className="font-medium">Hỗ trợ</h3>
      </Link>
      <div className="grid grid-cols-[30px_minmax(200px,_1fr)] w-3/4 mx-12 p-1 border-2 border-white hover:border-2 hover:border-red-600 hover:rounded-xl">
        <div className="grid grid-cols-[30px_minmax(200px,_1fr)]">
          <i className="fa-solid fa-right-from-bracket pt-4 pl-2 "></i>
          <Button
            style={{
              border: 0,
              paddingLeft: '0px',
              textAlign: 'left',
              fontSize: 16,
            }}
            href="/login"
            onClick={handleLogout}
          >
            <h3 className="font-medium">Đăng xuất</h3>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserCommon;
