import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
// import data from "../phone/DataPhone";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link, useNavigate } from 'react-router-dom';
// import Products from "./../products/Products";
import { addItemToCart, getCart } from '../api/cart';
import { getProducts } from '../api/products';
import { Button, message } from 'antd';

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

function PhoneDetail() {
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
        setProducts(response.data.data.filter((product) => product.type === 'Điện thoại'));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="relative">
      <Slider {...settings}>
        {products.map((products) => {
          return (
            <div key={products.id} className=" ml-2">
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
                  <Link to="/payment">
                    <p
                      className="text-center bg-red-600 w-full h-[40px] text-white py-[6px] rounded-md cursor-pointer hover:scale-105"
                      onClick={() => {
                        handleAddToCart(products._id, quantity);
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

export default PhoneDetail;
