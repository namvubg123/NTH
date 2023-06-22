import React, { useEffect, useState } from 'react';
import { message, notification } from 'antd';
import { getProducts } from '../api/products';
import { Link, useNavigate } from 'react-router-dom';

function ListOld() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('Điện thoại cũ');
  const Navigate = useNavigate();

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
    setLoading(true);
    getProducts()
      .then((response) => {
        setProducts(response.data.data.filter((product) => product.type === category));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
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
            className={`flex mr-5 border-2 rounded-lg pl-2 pr-2 pb-1 cursor-pointer hover:scale-110 ${
              category === 'Điện thoại cũ' ? 'border-gray-200' : ''
            }`}
            onClick={() => handleCategoryChange('Điện thoại cũ')}
          >
            <p className="text-[18px] ml-1">Điện thoại cũ</p>
          </div>
          <div
            id="2"
            className={`flex mr-5 border-2 rounded-lg pl-2 pr-2 pb-1 cursor-pointer hover:scale-110 ${
              category === 'Laptop Cũ' ? 'border-gray-200' : ''
            }`}
            onClick={() => handleCategoryChange('Laptop Cũ')}
          >
            <p className="text-[18px] mr-5 ml-1">Laptop cũ</p>
          </div>
          <div
            className={`flex mr-5 border-2 rounded-lg pl-2 pr-2 pb-1 cursor-pointer hover:scale-110 ${
              category === 'Tai nghe cũ' ? 'border-gray-200' : ''
            }`}
            onClick={() => handleCategoryChange('Tai nghe cũ')}
          >
            <p className="text-[18px] ml-1 text-red-700 font-semibold tracking-wide">Tai nghe cũ</p>
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

export default ListOld;
