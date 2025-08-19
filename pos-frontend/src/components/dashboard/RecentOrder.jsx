import React from 'react';
import { useQueryClient } from "@tanstack/react-query";
import { orders } from '../../index';
import { GrUpdate } from 'react-icons/gr';

import { formatDateAndTime } from "../../index";

const RecentOrder = () => {

    const queryClient = useQueryClient();
    const handleStatusChange = ({ orderId, orderStatus }) => {
        console.log(orderId)
    };

    return (
        <div className='container mx-auto bg-[#262626] p-4 rounded-lg'>
            <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">
                Recent Orders
            </h2>

            <div className="overflow-x-auto">
                <table className='w-full text-left text-[#f5f5f5]'>
                    <thead className="bg-[#333] text-[#ababab]">
                        <tr>
                            <th className="p-3">Order ID</th>
                            <th className="p-3">Customer</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Date & Time</th>
                            <th className="p-3">Items</th>
                            <th className="p-3">Table No</th>
                            <th className="p-3">Total</th>
                            <th className="p-3 text-center">Payment Method</th>
                        </tr>
                    </thead>

                    <tbody className="border-b border-gray-600 hover:bg-[#333]">
                        {orders.map((order, index) => (
                            <tr key={index} className='border-b border-gray-600 hover:bg-[#333]'>
                                <td className="p-4">#{Math.floor(new Date(order.orderDate).getTime())}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RecentOrder;