import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { getProducts } from '../api/products';
import Meta from 'antd/es/card/Meta';
import { Badge, Button, Card, InputNumber, Rate, message } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { addItemToCart, getCart } from '../api/cart';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className=" bg-white absolute left-full top-[45%]" onClick={onClick}>
      <button className="text-red-300 text-[30px] pt-[2px]">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="bg-white absolute right-full top-[45%]" onClick={onClick}>
      <button className=" text-red-300 text-[30px] pt-[2px]" onClick={onClick}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
    </div>
  );
};

function FlashDetail(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [products, setProducts] = useState([]);
  const Navigate = useNavigate();
  const [cartItems, setCartItems] = useState(getCart());
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (productId) => {
    addItemToCart(productId, quantity);
    setCartItems(getCart());
  };

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="relative ">
      <Slider {...settings}>
        {products.map((products) => {
          return (
            <div key={products.id}>
              <Badge.Ribbon text={`Giảm ${products.offer} % `} color="red">
                <Card
                  actions={[<AddToCartButton item={products} quantity={quantity} handleAddToCart={handleAddToCart} />]}
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
                    <div>
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
                      <InputNumber
                        min={1}
                        max={10}
                        defaultValue={1}
                        onChange={(value) => {
                          setQuantity(value);
                        }}
                      />
                    </div>
                  </div>
                  <button
                    icon={<ShoppingCartOutlined />}
                    className="text-center bg-red-600 w-full mt-8 h-[40px] text-white py-[6px] rounded-md cursor-pointer hover:scale-105"
                    onClick={() => {
                      handleAddToCart(products._id, quantity);
                    }}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </Card>
              </Badge.Ribbon>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
function AddToCartButton({ item, quantity, handleAddToCart }) {
  const addToCart = () => {
    handleAddToCart(item._id, quantity).then((res) => {
      message.success(`${item.name} added`);
    });
  };
  return (
    <Button type="link" onClick={addToCart}>
      Thêm vào giỏ hàng
    </Button>
  );
}

export default FlashDetail;
