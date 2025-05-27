import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Home = () => {
  //const logo = ""; // Replace with your logo URL
  return (
    <>
      <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          {/*<img src={logo} alt="restro logo" className="h-8 w-8"/>* */}

          <h1 className="text-lg font-semibold text-[#f5f5f5]">
            Point of Sale - Chile
          </h1>
        </div>
        {/* END LOGO */}

        {/* SEARCH */}
        <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
          />
        </div>
        {/* END SEARCH */}

        {/* LOGGED USER DETAILS */}
        <div className="text-[#f5f5f5] flex items-center gap-4">
          <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
            <FaBell className="text-[#f5f5f5] text-2xl" />
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <FaUserCircle className="text-[#f5f5f5] text-4xl" />
            <div className="flex flex-col items-start">
              <h1 className="text-md text-[#f5f5f5]">Pedro Pablo Osorio</h1>
              <p className="text-xs text-[#ababab]">Admin User</p>
            </div>
          </div>
        </div>
        {/* END LOGGED USER DETAILS */}
      </header>
    </>
  );
};
export default Home;
