import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slide() {
  const data = [
    {
      id: 1,
      title: 'GALAXY S23 ULTRA',
      image: './images/slider/slide1.png',
    },
    {
      id: 2,
      title: 'GALAXY S23 ULTRA',
      image: './images/slider/Slide2.png',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <div key={value.id}>
              <img src={value.image} alt="" className="w-full h-full" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Slide;
