import React from 'react'
import { OrderList } from '../../index'
import { FaSearch } from "react-icons/fa";

const RecentOrders = () => {
    return (
        <div className='px-8 mt-6'>
            <div className='bg-[#1a1a1a] w-full h-[450px] rounded-lg'>
                <div className='flex justify-between items-center px-6 py-4'>
                    <h1 className='text-[#f5f5f5] text-lg font-semibold'>Recent Orders</h1>
                    <a href="" className='text-[#025cca] text-sm font-semibold'>View All</a>
                </div>

                <div className='flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-4 mx-6'>
                    <FaSearch className='text-[#f5f5f5]' />
                    <input className='bg-[#1f1f1f] outline-none text-[#f5f5f5]' placeholder='Search Recent Orders' />
                </div>

                {/* Order List Component */}
                <div className='mt-4 px-6 py-5 overflow-y-scroll h-[300px] scrollbar-hide h-[calc(100vh-14rem)] overflow-y-scroll'>
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />

                </div>

                {/* End List Component */}
            </div>
        </div>
    )
}

export default RecentOrders
