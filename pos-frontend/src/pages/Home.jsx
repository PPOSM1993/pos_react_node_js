import React from "react";
import {BottomNav} from "../index"

const Home = () => {
  return (
    <>
      <section className="bg-[#1f1f1f] h-[calc(100vh-4rem)] overflow-hidden flex gap-3">
        {/* Left Div*/}
        <div className="flex-[3] bg-red-600">
          xD
        </div>
        {/* End Left Div*/}

        {/* Right Div*/}
        <div className="flex-[2] bg-gray-500">
          xD
        </div>
        {/* End Right Div*/}
        <BottomNav />
      </section>
    </>
);
};
export default Home;
