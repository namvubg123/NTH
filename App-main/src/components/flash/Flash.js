import React from 'react';
import FlashDetail from './FlashDetail';

function Flash() {
  return (
    <div className="mt-[20px] w-3/4 mr-auto ml-auto">
      <div className="flex">
        <div className="mt-[12px] mr-[10px] text-[20px] text-red-600">
          <i className="fa-solid fa-bolt"></i>
          <span className="ml-4">Flash Sales</span>
        </div>
      </div>
      <FlashDetail />
    </div>
  );
}
export default Flash;
