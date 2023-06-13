import React from 'react'
import UserCommon from '../common'

function PurchaseHistory() {
  return (
    <div className='w-3/4 mx-auto grid grid-cols-3 gap-6 mt-[50px] h-[37vh]'>
      <UserCommon/>
      <div className='col-span-2'>
        <h2 className='uppercase absolute left-[45%] text-[24px] font-semibold text-red-600'>Quản lý đơn hàng</h2>
      </div>
    </div>
  )
}

export default PurchaseHistory
