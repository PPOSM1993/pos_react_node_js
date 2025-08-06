import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";


const OrderCard = () => {
    return (
        <>
            <div>
                <div className="w-[500px] bg-[#262626] p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-5">
                        <button className="bg-[#F6B100] rounded-lg p-4 text-xl font-bold text-[#000000]">
                            AM
                        </button>

                        <div className="flex items-center justify-between w-[100%]">
                            <div className="text-[#f5f5f5] text-sm tracking-wide">
                                <h1 className="text-[#ababab] text-lg font-semibold tracking-wide">Pedro Osorio</h1>
                                <p className="text-[#ababab] text-sm">#101/ Dine in</p>
                            </div>


                            <div className="flex flex-col items-end gap-3">
                                <p className="text-green-600 bg-[#2e4a40] px-2 rounded-lg py-1">
                                    <FaCheckDouble className="inline mr-2" />
                                    Ready
                                </p>
                                <p className="text-[#ababab] text-sm">
                                    {" "}
                                    <FaCircle className="inline mr-2 text-green-600" /> Ready to Serve
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4 text-[#ababab]">
                        <p>January, 18, 2025 08:32 PM</p>
                        <p>8 Items</p>
                    </div>
                    <hr className="w-full text-[#ababab] border-t-1 mt-4 border-gray-500" />
                    <div className="flex items-center justify-between mt-4">
                        <h1 className="text-[#f5f5f5] text-xl font-bold">Total</h1>
                        <p className="text-[#f5f5f5] text-lg font-semibold">$ 250.00</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderCard;