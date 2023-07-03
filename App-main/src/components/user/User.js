import React from 'react';
import Slider from 'react-slick';
import UserCommon from './common';
// import { SiHellofresh } from 'react-icons/si'
import { CgHello } from 'react-icons/cg';

function User() {
  const UserName = sessionStorage.getItem('User');
  const SetUserName = JSON.parse(UserName);

  const data = [
    {
      id: 1,
      title: 'TUẦN LỄ SALE NÓNG - MUA NGAY',
      image: '../images/slider_user/slide1.png',
    },
    {
      id: 2,
      title: 'XIAOMI REDMI NOTE 12 - MỞ BÁN DEAL HỜI ',
      image: '../images/slider_user/slide2.png',
    },
    {
      id: 3,
      title: 'SONY WF-C700 - GIÁ TỐT',
      image: '../images/slider_user/slide3.png',
    },
    {
      id: 4,
      title: 'POCO X5 - CHỈ TỪ 5.45 TRIỆU',
      image: '../images/slider_user/slide4.png',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
  };
  return (
    <div className="w-3/4 mx-auto grid grid-cols-3 gap-6 my-[50px] h-[37vh]">
      <UserCommon />
      <div>
        <div className="text-[60px] mt-[30px] text-red-600 w-5/12 mx-auto">
          {/* <i className="fa-solid fa-face-smile-wink"></i> */}
          {/* <a href="https://www.flaticon.com/free-icons/welcome" title="welcome icons"></a> */}
          <CgHello />
        </div>
        <h3 className="text-[27px]">Chào mừng {SetUserName ? SetUserName.lastName : ''}</h3>
      </div>
      <div>
        <div className="text-center">
          <h2 className="font-semibold text-[20px] text-red-600 border-2 border-red-500 rounded-xl w-4/6 py-2 mb-4 mx-auto">
            Có thể bạn quan tâm
          </h2>
          <div>
            <Slider {...settings}>
              {data.map((value) => {
                return (
                  <a href="/phone" key={value.id}>
                    <img src={value.image} alt="" className="w-[380px] h-[180px] rounded-xl" />
                    <p className="text-red-600 text-[14px] mt-1 font-semibold">{value.title}</p>
                  </a>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
