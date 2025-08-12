import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";


const Bills = () => {

    const cartData = useSelector((state) => state.cart);
    const total = useSelector(getTotalPrice);
    const taxRate = 19;
    const tax = (total * taxRate) / 100;
    const dispatch = useDispatch();
    const totalPriceWithTax = total + tax;

    return (
        <>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Items ({cartData.lenght})</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">{total}</h1>
            </div>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Tax (19%)</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">${tax.toFixed(2)}</h1>
            </div>

            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Total With Tax</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">${total}</h1>
            </div>
            <div className="flex item-center gap-3 px-5 mt-4">
                <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">Cash</button>
                <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">Online</button>
            </div>


            <div className="flex item-center gap-3 px-5 mt-4">
                <button className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold">Print Receipt</button>
                <button className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold">Place Order</button>
            </div>
        </>
    );
}

export default Bills;
