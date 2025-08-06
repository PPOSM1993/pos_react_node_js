import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const OrderList = () => {
  return (
    <>
      <div className="flex items-center gap-8 mb-3">
        <button className="bg-[#F6B100] rounded-lg p-4 text-xl font-bold text-[#000000]">
          AM
        </button>
        <div className="flex items-center justify-between w-[100%]">
          <div className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            <h1>Pedro Pablo Osorio San Martin</h1>
            <p className="text-[#ababab]">8 Items</p>
          </div>

          <div>
            <h1 className="text-[#F6B100] font-semibold border border-[#F6B100] rounded-lg p-3">
              Table No 3:
            </h1>
          </div>

          <div className="flex flex-col items-end gap-2">
            <p className="text-green-600">
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
    </>
  );
};

export default OrderList;