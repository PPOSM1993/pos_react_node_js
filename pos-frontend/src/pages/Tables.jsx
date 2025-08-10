import React, { useState } from "react";
import { BottomNav, BackButton, TableCard, tables } from '../index'


const Tables = () => {

    const [status, setStatus] = useState("all");
    return (
        <>
            <section className="bg-[#1f1f1f]  h-[calc(100vh-5rem)] overflow-hidden">
                <div className="flex items-center justify-between px-10 py-4">
                    <div className="flex items-center gap-4">
                        <BackButton />
                        <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">Orders</h1>
                    </div>
                </div>

                <div className="flex flex-wrap justify-around gap-5 p-10 overflow-y-scroll scrollbar-hide h-[650px]">
                    {
                        tables.map((table) => {
                            return (
                                <TableCard
                                    key={table.id}
                                    name={table.name}
                                    status={table.status}
                                    initials={table.initial}
                                />
                            )
                        })
                    }
                </div>

                <BottomNav />
            </section>
        </>
    )
}

export default Tables;