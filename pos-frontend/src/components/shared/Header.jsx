import React from "react";
import logo from '../../assets/images/logo.png'; // Adjust the path as necessary
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
                {/* LOGO */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <img src={logo} className="h-8 w-8" alt="restro logo" />
                    <h1 className="text-lg font-semibold text-[#f5f5f5] tracking-wide">
                        Restro
                    </h1>
                </div>
                {/* END LOGO */}

                {/* SEARCH BAR */}
                <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
                    <FaSearch className="text-[#f5f5f5]" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
                    />
                </div>
                {/* END SEARCH BAR */}

                {/* LOGGED USER DETAILS */}
                <div className="flex items-center gap-6">
                    <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
                        <FaBell className="text-[#f5f5f5] text-2xl" />
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <FaUserCircle className="text-[#f5f5f5] text-2xl"/>
                    </div>
                    <div className="flex flex-col items-start text-[#f5f5f5]">
                        <h1 className="text-md">Pedro Osorio</h1>
                        <p className="text-xs">Admin</p>
                    </div>

                </div>
                {/* END LOGGED USER DETAILS */}
            </header>
        </>
    )
}

export default Header;