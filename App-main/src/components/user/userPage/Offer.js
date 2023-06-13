import React from 'react'
import UserCommon from '../common'
import { FcCloseUpMode } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import {FaRegHandPointRight } from 'react-icons/fa'

function Offer() {
  return (
    <div className='w-3/4 mx-auto grid grid-cols-3 gap-6 my-[50px] h-[70vh]'>
      <UserCommon/>
      <div className='col-span-2'>
        <h2 className='uppercase absolute left-[48%] text-[24px] font-bold text-red-600'>Ưu đãi hấp dẫn</h2>
        <div className='mt-[50px]'>
          <div className='flex text-[20px] font-semibold italic'>
            <h3>Cảm ơn bạn đã tin tưởng NTH Mobile</h3> 
            <FcCloseUpMode className='ml-3 text-[25px]'/>
          </div>
          <div>
            <ul className='list-decimal font-medium'>
              <li className='text-[18px] underline text-red-600'>Bạn mới</li>
              <p>NTH Mobile giảm 10% và miễn phí vận chuyển cho đơn hàng đầu tiên.</p>
              <li className='text-[18px] underline text-red-600'>Sinh nhật thành viên</li>
              <ul className='list-disc'>
                <li className='italic font-semibold'>Đối tượng áp dụng</li>
                <p>Dành cho khách hàng thành viên có sinh nhật trong tháng</p>
                
                <li className='italic font-semibold mt-2'>Quà tặng sinh nhật</li>
                <p>01 Mã Giảm Giá 150.000đ áp dụng cho đơn hàng từ 500.000đ</p>
                <p><span className='text-red-500'>* Lưu ý:</span> Mỗi khách hàng chỉ được nhận quà tặng sinh nhật 1 lần/ năm.</p>
                <li className='italic font-semibold mt-2'>Thời gian áp dụng</li>
                <p>- Thời gian nhận ưu đãi: Mã Giảm Giá sẽ được gắn vào tài khoản thành viên của khách hàng thỏa điều kiện vào đúng ngày sinh nhật của khách.</p>
                <p>- Hạn sử dụng: 30 ngày kể từ ngày phát hành mã</p>
              </ul>
            </ul>
          </div>
        </div>
        <p className='font-medium mt-[30px] flex'>Còn chần chờ gì nữa mà không
          <FaRegHandPointRight className='text-red-500 text-[20px] ml-5 mr-2'/>
          <Link to='/'>
            <p className='text-red-600 uppercase hover:underline'>Mua ngay</p>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Offer
