import React, { useEffect, useState } from 'react';
// import Heart from "react-heart";
import { getProducts } from '../api/products';

import { Link, useNavigate } from 'react-router-dom';
import { message, notification } from 'antd';

function ListPhone() {
  const [products, setProducts] = useState([]);
  const Navigate = useNavigate();
  const [category, setCategory] = useState('Apple');

  const handleAddToCart = (productId) => {
    const obj = {
      productId: productId,
      quantity: 1,
    };
    let itemReqList = localStorage.getItem('cartItems');
    if (itemReqList) {
      const arr = JSON.parse(itemReqList);
      console.log(arr);
      const existingItem = arr.find((item) => item.productId === obj.productId);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        arr.push(obj);
        notification.success({ message: arr });
      }
      localStorage.setItem('cartItems', JSON.stringify(arr));

      message.success('Thêm vào giỏ hàng thành công!');
    } else {
      localStorage.setItem('cartItems', JSON.stringify([obj]));

      message.success('Thêm vào giỏ hàng thành công!');
    }
    window.location.reload();
  };

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data.data.filter((product) => product.category.name === category));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);
  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <div className="mb-[10vh]">
      <div>
        <div className="w-3/4 mx-auto flex my-[20px]">
          <div
            className={`flex mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 cursor-pointer hover:scale-110"
            id="1 ${category === 'Apple' ? 'border-gray-200' : ''}`}
            onClick={() => handleCategoryChange('Apple')}
          >
            <div className="text-[18px] mt-[-2px]">
              <i class="fa-brands fa-apple"></i>
            </div>
            <p className="text-[18px] ml-1">Apple</p>
          </div>
          <div
            id="2"
            className={`${category === 'Samsung' ? 'border-gray-200' : ''}`}
            onClick={() => handleCategoryChange('Samsung')}
          >
            <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 text-blue-700 font-bold cursor-pointer hover:scale-110">
              SamSung
            </p>
          </div>
          <div
            className={` flex mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 cursor-pointer hover:scale-110 ${
              category === 'Xiaomi' ? 'border-gray-200' : ''
            }`}
            onClick={() => handleCategoryChange('Xiaomi')}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/800px-Xiaomi_logo_%282021-%29.svg.png"
              alt=""
              className="w-[20px] h-[20px] mt-[5px]"
            />
            <p className="text-[18px] ml-1 text-gray-500 font-medium tracking-wide">Xiaomi</p>
          </div>
          <div
            className={` ${category === 'Oppo' ? 'border-gray-200' : ''}`}
            onClick={() => handleCategoryChange('Oppo')}
          >
            <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 lowercase text-green-600 font-semibold cursor-pointer hover:scale-110">
              Oppo
            </p>
          </div>
          <div
            className={` ${category === 'Realme' ? 'border-gray-200' : ''}`}
            onClick={() => handleCategoryChange('Realme')}
          >
            <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 text-yellow-400 cursor-pointer hover:scale-110">
              realme
            </p>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto grid grid-cols-5 gap-4">
        {products.map((products) => {
          return (
            <div key={products.id} className="">
              <div className="p-[10px] h-[380px] border-2 border-[#ddd] rounded w-[215px]">
                <div
                  onClick={() => {
                    Navigate(`/${products._id}`);
                  }}
                >
                  <p className="bg-red-600 w-[65px] h-[25px] text-[12px] font-semibold rounded-full text-center pt-1 text-white">
                    Giảm {products.offer}%
                  </p>
                  <Link to="/products">
                    <img src={products.productIMG} alt="" className="w-[180px] h-[180px] m-2" />
                  </Link>
                  <p className="text-[15px] font-semibold h-[50px] text-[#444]">{products.name}</p>
                  <p className="text-red-600 font-semibold mb-1">
                    {` ${products.price.toLocaleString('vi-VN', {
                      currency: 'VND',
                    })} VND`}{' '}
                  </p>
                </div>
                <div className="mt-[20px]">
                  <Link>
                    <p
                      className="text-center bg-red-600 w-full h-[40px] text-white py-[6px] rounded-md cursor-pointer hover:scale-105"
                      onClick={() => {
                        handleAddToCart(products._id);
                      }}
                    >
                      Thêm vào giỏ hàng
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListPhone;
