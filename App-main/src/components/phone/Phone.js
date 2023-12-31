import React from 'react';
import PhoneDetail from './PhoneDetail';

function Phone() {
  return (
    <div className="mt-[20px] w-3/4 mr-auto ml-auto">
      <div className="flex">
        <div className="mt-[12px] text-[20px] text-red-600">
          <i className="fa-solid fa-mobile-screen-button"></i>
          <span className="ml-[10px]">Điện thoại nổi bật</span>
        </div>
      </div>
      <PhoneDetail />
    </div>
  );
}

export default Phone;
