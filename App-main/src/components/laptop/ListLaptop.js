import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { getProducts } from '../api/products';
import { useNavigate } from 'react-router-dom';
import { message, notification } from 'antd';

function ListLaptop() {
  const [products, setProducts] = useState([]);
  const Navigate = useNavigate();
  const [category, setCategory] = useState('Laptop');

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
            id="1 ${category === 'MAC' ? 'border-gray-200' : ''}`}
            onClick={() => handleCategoryChange('MAC')}
          >
            <p className="text-[18px] ml-1">Mac</p>
          </div>
          <div
            id="2"
            className={`${category === 'ROG' ? 'border-gray-200' : ''}`}
            onClick={() => handleCategoryChange('ROG')}
          >
            <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 text-black font-bold cursor-pointer hover:scale-110">
              Asus
            </p>
          </div>
          <div
            className={` flex mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 cursor-pointer hover:scale-110${
              category === 'Lenovo' ? 'border-gray-200' : ''
            }`}
            onClick={() => handleCategoryChange('Lenovo')}
          >
            <p className="text-[18px] ml-1 text-red-700 font-semibold tracking-wide">Lenovo</p>
          </div>
          <div className={`${category === 'MSI' ? 'border-gray-200' : ''}`} onClick={() => handleCategoryChange('MSI')}>
            <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 text-black font-bold cursor-pointer hover:scale-110">
              MSI
            </p>
          </div>
          <div
            className={`${category === 'Acer' ? 'border-gray-200' : ''}`}
            onClick={() => handleCategoryChange('Acer')}
          >
            <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 text-green-600 font-semibold cursor-pointer hover:scale-110">
              Acer
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
                  <img src={products.productIMG} alt="" className="w-[180px] h-[180px] m-2" />
                  <p className="text-[15px] font-semibold h-[50px] text-[#444]">{products.name}</p>
                  <p className="text-red-600 font-semibold mb-1">
                    {` ${products.price.toLocaleString('vi-VN', {
                      currency: 'VND',
                    })} VND`}
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
                      Mua ngay
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

export default ListLaptop;
