import React from 'react';
import Slide from '../components/slider/Slider';
import BannerHeader from '../components/banner/BannerHeader';
import Flash from '../components/flash/Flash';
import Scroll from '../components/Layout/Scroll/index';
import Phone from '../components/phone/Phone';
import Laptop from '../components/laptop/Laptop';
import Accessories from '../components/accessories/Accessories';
import BannerFooter from '../components/banner/BannerFooter';
import Old from '../components/old/Old';


function Home() {
  return (
    <div >

      <Slide />
      <BannerHeader />
      <Flash />
      <Scroll />
      <Phone />
      <Laptop />
      <Accessories />
      <Old />
      <BannerFooter />
      

    </div>
  );
}

export default Home;