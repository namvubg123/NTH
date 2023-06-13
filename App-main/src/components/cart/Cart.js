import React, { useState } from 'react';
import { Button, InputNumber, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { addItemToCart, getCart, emptyCart } from '../api/cart';
import Cookies from 'js-cookie';

function Cart() {
  const token = Cookies.get('token');

  const [count, setCount] = useState(1);
  return (
    <div className="w-3/4 mx-auto mt-[20px] h-[80vh]">
      <div className="flex">
        <a href="/" className="flex">
          <div className="text-red-600">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <p className="text-red-600 font-semibold ml-2">Quay lại</p>
        </a>
        <h2 className="text-[20px] font-semibold text-red-600 mx-auto">Giỏ hàng</h2>
      </div>
      <div className="w-[50%] mx-auto my-[20px]">
        <div className="grid grid-cols-[200px_minmax(700px,_1fr)] gap-4">
          <div>
            <img src="./images/phone/Iphone12pro.png" alt="/" className="h-[20vh]" />
          </div>
          <div>
            <h2 className="text-[18px] font-medium">Iphone 12 gias rer batas ngow aaaaaa</h2>
            <p className="text-red-600 text-[17px] font-semibold mt-[10px] mb-[8vh]">12.000.000 VND</p>
            <div className="grid grid-cols-[1px_minmax(80px,_1fr)]">
              <Space size={100}>
                <InputNumber
                  className="hover:border-red-500 border-gray-300"
                  value={count}
                  size="large"
                  min={1}
                  max={10}
                  defaultValue={1}
                  onChange={(e) => setCount(e)}
                />
                <Button
                  size="large"
                  className="flex justify-center items-center hover:!border-red-500 hover:!text-red-500"
                  icon={<DeleteOutlined className="text-[24px]" />}
                ></Button>
              </Space>
            </div>
          </div>
        </div>
        <div className="mt-[50px]">
          <Link to="/payment">
            <button className="bg-red-600 border-2 border-solid border-red-600 text-white font-semibold uppercase py-[20px] w-full h-full">
              Đặt hàng
            </button>
          </Link>
          <Link to="/">
            <button className="border-2 border-solid border-red-600 text-red-600 font-semibold uppercase py-[20px] mt-[10px] w-full h-full">
              Chọn thêm sản phẩm
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
