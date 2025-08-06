import React, { useState } from "react";
import { BackButton, BottomNav, OrderCard } from '../index'

const Orders = () => {

    const [status, setStatus] = useState("all");

    return (
        <>
            <section className="bg-[#1f1f1f]  h-[calc(100vh-5rem)] overflow-hidden">
                <div className="flex items-center justify-between px-10 py-4 mt-2">
                    <div className="flex items-center gap-4">
                        <BackButton />
                        <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
                            Orders
                        </h1>
                        <div className="flex items-center justify-around gap-4">
                            <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg ${status === 'all' && 'bg-[#383838]'} rounded-lg px-5 py-2 font-semibold`}>All</button>
                            <button onClick={() => setStatus("progress")} className={`text-[#ababab] text-lg ${status === 'progress' && 'bg-[#383838]'} rounded-lg px-5 py-2 font-semibold`}>In Progress</button>
                            <button onClick={() => setStatus("ready")} className={`text-[#ababab] text-lg ${status === 'ready' && 'bg-[#383838]'} rounded-lg px-5 py-2 font-semibold`}>Ready</button>
                            <button onClick={() => setStatus("completed")} className={`text-[#ababab] text-lg ${status === 'completed' && 'bg-[#383838]'} rounded-lg px-5 py-2 font-semibold`}>Completed</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-6 px-10 py-4 scrollbar-hide h-[calc(100vh-14rem)] overflow-y-scroll items-center justify-center">
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                </div>

                <BottomNav/>
            </section>
        </>
    )
}

export default Orders;