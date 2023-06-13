import React from 'react';
import LaptopDetail from './LaptopDetail';

function Laptop() {
  return (
    <div className="mt-[20px] w-3/4 mr-auto ml-auto">
      <div className="flex">
        <div className="mt-[12px] mr-[10px] text-[20px] text-red-600">
          <i className="fa-solid fa-laptop"></i>
          <span>Laptop</span>
        </div>
      </div>
      <LaptopDetail />
    </div>
  );
}

export default Laptop;
