import React, { useEffect, useState } from 'react';
// import Heart from "react-heart";
import { getProducts } from '../api/products';
import { Badge, Card, Rate } from 'antd';
import Meta from 'antd/es/card/Meta';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function ListPhone() {
  // const [active, setActive] = useState(false)
  const [products, setProducts] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data.data.filter((product) => product.type === 'Điện thoại'));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <div className="w-3/4 mx-auto flex my-[20px]">
          <div
            className="flex mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 cursor-pointer hover:scale-110"
            id="1"
          >
            <div className="text-[18px] mt-[-2px]">
              <i class="fa-brands fa-apple"></i>
            </div>
            <p className="text-[18px] ml-1">Apple</p>
          </div>
          <div id="2">
            <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 text-blue-700 font-bold cursor-pointer hover:scale-110">
              SamSung
            </p>
          </div>
          <div className="flex mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 cursor-pointer hover:scale-110">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/800px-Xiaomi_logo_%282021-%29.svg.png"
              alt=""
              className="w-[20px] h-[20px] mt-[5px]"
            />
            <p className="text-[18px] ml-1 text-gray-500 font-medium tracking-wide">Xiaomi</p>
          </div>
          <div>
            <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 lowercase text-green-600 font-semibold cursor-pointer hover:scale-110">
              Oppo
            </p>
          </div>
          <div>
            <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 text-yellow-400 cursor-pointer hover:scale-110">
              realme
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1150px] mx-auto">
        <div className="flex justify-between flex-wrap gap-y-8">
          {products.map((products) => {
            return (
              <div key={products.id}>
                <Badge.Ribbon text={`Giảm ${products.offer} % `} color="red">
                  <Card
                    hoverable
                    style={{
                      width: 215,
                      border: '1px solid #ccc',
                    }}
                  >
                    <div
                      onClick={() => {
                        Navigate(`/${products._id}`);
                      }}
                    >
                      <img alt="example" src={products.productIMG} />
                      <Meta
                        className="font-bold"
                        title={products.name}
                        description={`${products.salePrice.toLocaleString('vi-VN', {
                          currency: 'VND',
                        })} VND`}
                      />
                      <Meta
                        className="line-through font-bold"
                        description={`Giá gốc: ${products.price.toLocaleString('vi-VN', {
                          currency: 'VND',
                        })} VND`}
                      />
                      <Rate
                        disabled
                        allowHalf
                        defaultValue={2.5}
                        style={{
                          fontSize: '16px',
                        }}
                      />
                    </div>
                    <button
                      icon={<ShoppingCartOutlined />}
                      className="text-center bg-red-600 w-full mt-8 h-[40px] text-white py-[6px] rounded-md cursor-pointer hover:scale-105"
                    >
                      Thêm vào giỏ hàng
                    </button>
                  </Card>
                </Badge.Ribbon>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ListPhone;
