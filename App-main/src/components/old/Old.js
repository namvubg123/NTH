import React from 'react';
import OldDetail from './OldDetail';

function Old() {
  return (
    <div className="mt-[20px] w-3/4 mx-auto">
      <div className="flex">
        <div className="mr-[10px] text-[20px] text-red-600">
          <i className="fa-solid fa-box"></i>
          <span className="ml-[10px]">Hàng cũ</span>
        </div>
      </div>
      <OldDetail />
    </div>
  );
}

export default Old;
