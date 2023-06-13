import React from 'react'
import UserCommon from '../common'
import { FcOnlineSupport, FcHeadset, FcCustomerSupport } from 'react-icons/fc'

function CustomerSupport() {
  return (
    <div className='w-3/4 mx-auto grid grid-cols-3 gap-6 mt-[50px] h-[37vh]'>
      <UserCommon/>
      <div>
        <div className='border-2 border-red-400 py-2 pl-4 font-medium rounded-2xl grid grid-cols-[40px_minmax(200px,_1fr)] mb-4'>
          <div className='text-[28px]'>
            <i className="fa-solid fa-phone-volume"></i>
          </div>
          <div>
            <p>Hotline:</p>
            <a href='tel: 0999999999' className='text-red-500'>0999 999 999</a>
          </div>
        </div>
        <div className='border-2 border-red-400 py-2 pl-4 font-medium rounded-2xl grid grid-cols-[40px_minmax(200px,_1fr)]'>
          <FcCustomerSupport className='text-[30px] mt-3'/>
          <div>
            <p>Tư vấn:</p>
            <a href='tel: 0924865898'>0924 865 898</a>
          </div>
        </div>
      </div>
      <div>
        <div className='border-2 border-red-400 py-2 pl-4 font-medium rounded-2xl grid grid-cols-[40px_minmax(200px,_1fr)] mb-4'>
            <FcOnlineSupport className='text-[30px] mt-3'/>
            <div>
              <p>Hỗ trợ kỹ thuật:</p>
              <a href='tel: 0393939393'>0393 939 393</a>
            </div>
          </div>
          <div className='border-2 border-red-400 py-2 pl-4 font-medium rounded-2xl grid grid-cols-[40px_minmax(200px,_1fr)]'>
            <FcHeadset className='text-[30px] mt-3'/>
            <div>
              <p>Bảo hành:</p>
              <a href='tel: 0923157220'>0923 157 220</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CustomerSupport
