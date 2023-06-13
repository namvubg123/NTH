import React, { useEffect, useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Card, Rate } from 'antd';
import Meta from 'antd/es/card/Meta';
import { getProducts } from '../api/products';
import { useNavigate } from 'react-router-dom';

function ListLaptop() {
  // const [active, setActive] = useState(false)
  const [products, setProducts] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data.data.filter((product) => product.type === 'Laptop'));
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
            <p className="text-[18px] ml-1">Mac</p>
          </div>
          <div id="2">
            <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 text-black font-bold cursor-pointer hover:scale-110">
              Asus
            </p>
          </div>
          <div className="flex mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 cursor-pointer hover:scale-110">
            <p className="text-[18px] ml-1 text-red-700 font-semibold tracking-wide">Lenovo</p>
          </div>
          <div>
            <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 text-black font-bold cursor-pointer hover:scale-110">
              MSI
            </p>
          </div>
          <div>
            <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 text-green-600 font-semibold cursor-pointer hover:scale-110">
              acer
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1150px] mx-auto">
        <div className="flex justify-between flex-wrap gap-y-8">
          {products &&
            products.map((products) => {
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

export default ListLaptop;
