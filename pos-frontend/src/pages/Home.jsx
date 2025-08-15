import React from "react";
import { Greetings, MiniCard, RecentOrders, PopularDishes, BottomNav } from '../index'
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";

const Home = () => {
    return (
        <>
            <section className="bg-[#1f1f1f]  h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
                {/* LEFT DIV*/}
                <div className="flex-[3] bg-[#1a1a1a]">
                    <Greetings />
                    {/* Other components can be added here */}
                    <div className="flex items-center w-full gap-3 px-8 mt-8">
                        <MiniCard title="Total Earnings" icon={<BsCashCoin />} number={512} footerNum={1.6} />
                        <MiniCard title="In Progress" icon={<GrInProgress />} number={16} footerNum={3.6} />
                    </div>
                    <RecentOrders />
                </div>
                {/* END LEFT DIV */}

                {/* RIGHT DIV*/}
                <div className="flex-[2] bg-[#1a1a1a]">
                    <PopularDishes />
                </div>
                {/* END RIGHT DIV */}
            </section>
            <BottomNav />
        </>
    )
}

export default Home;