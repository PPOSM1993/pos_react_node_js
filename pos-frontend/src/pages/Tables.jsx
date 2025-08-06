import React, { useState } from "react";
import { BottomNav, BackButton, TableCard, tables } from '../index'


const Tables = () => {

    const [status, setStatus] = useState("all");
    return (
        <>
            <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden ">
                <div className="flex items-center justify-between px-10 py-4">
                    <div className="flex items-center gap-4">
                        <BackButton />
                        <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">Tables</h1>
                    </div>

                    <div className="flex items-center justify-around gap-4">
                        <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg ${status === 'all' && 'bg-[#383838]'} rounded-lg px-5 py-2 font-semibold`}>All</button>
                        <button onClick={() => setStatus("booked")} className={`text-[#ababab] text-lg ${status === 'progress' && 'bg-[#383838]'} rounded-lg px-5 py-2 font-semibold`}>Booked</button>
                    </div>
                </div>

                <div className="grid grid-cols-5 gap-3 px-16 py-4 h-[650px] overflow-y-scroll scrollbar-hide">
                    {
                        tables.map((table) => {
                            return(
                                <TableCard key={table.id} table={table} name={table.name} status={table.status} initials={table.initial} />
                            )
                        })
                    }
                </div>
            </section>
            <BottomNav />
        </>
    )
}

export default Tables;