import React from 'react';
import { Link } from 'react-router-dom';

function PayForm() {
  return (
    <div className='w-3/4 mx-auto mt-[30px]'>
      <h2 className='text-center uppercase text-[20px] font-semibold text-red-600'>Thông tin đặt hàng</h2>
      <div className='w-1/2 mx-auto mt-7 border-2 border-gray-300 rounded-lg p-[20px] my-[20px]'>
        <h3 className='font-medium'>Thông tin khách hàng</h3>
        <div className='border-2 border-gray-300 rounded-lg p-3 my-[20px] hover:border-red-300 hover:shadow-lg'>
          <input type='text' placeholder='Họ và tên'/>
        </div>
        <div className='border-2 border-gray-300 rounded-lg p-3 my-[20px] hover:border-red-300 hover:shadow-lg'>
          <input type='number' placeholder='Số điện thoại'/>
        </div>
        <div className='border-2 border-gray-300 rounded-lg p-3 my-[20px] hover:border-red-300 hover:shadow-lg'>
          <input type="email" placeholder='Email' className='outline-none'/>
        </div>
        <div className='border-2 border-gray-300 rounded-lg p-3 my-[20px] hover:border-red-300 hover:shadow-lg'>
          <input type='text' placeholder='Địa chỉ'/>
        </div>
        <div>
          <p className='font-medium'>Phương thức thanh toán</p>
          <li className='cursor-pointer'>Thanh toán khi giao hàng(COD)</li>
        </div>
      </div>
      <div className='w-1/2 mx-auto mb-[30px]'>
        <Link to="/">
          <p className='text-center bg-red-600 py-5 text-white rounded-lg uppercase font-bold tracking-wider cursor-pointer'>
            Đặt hàng
          </p>
        </Link>
      </div>
    </div>
  )
}

export default PayForm
