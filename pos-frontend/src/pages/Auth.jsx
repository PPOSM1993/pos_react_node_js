import React, { useState } from "react";
import restaurant from "../assets/images/restaurant-img.jpg"
import logo from "../assets/images/logo.png"
import { Login, Register } from '../index'

const Auth = () => {

    const [isRegister, setIsRegister] = useState(false);

    return (
        <>
            <div className="flex min-h-screen w-full">
                {/* Left Side */}
                <div className="w-1/2 relative flex items-center justify-center bg-cover">
                    {/* BG Image */}
                    <img src={restaurant} alt="Restaurant IMG" className="w-full h-full object-cover" />
                    {/* Black Overlay  */}
                    <div className="absolute inset-0 bg-black bg-opacity-80"></div>
                    {/* Quote at bottom*/}
                    <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white">
                        "Serve customers the best food with prompt and friendly service in a
                        welcoming atmosphere, and they’ll keep coming back."
                        <br />
                        <span className="block mt-4 text-yellow-400">- Founder of Restro</span>
                    </blockquote>
                </div>
                {/* Right Side */}
                <div className="w-1/2 min-h-screen bg-[#1a1a1a] p-10">
                    <div className="flex flex-col items-center gap-2">
                        <img src={logo} alt="Restro Logo" className="h-20 w-20 border-2 rounded-full p-1" />
                        <h1 className="text-lg font-semibold text-[#f5f5f5] tracking-wide">A la Chilena</h1>
                    </div>

                    <h2 className="text-4xl text-center mt-10 font-semibold text-yellow-400 mb-10">
                        {isRegister ? "Employee Registration" : "Employee Login"}
                    </h2>

                    {/* Components */}
                    {isRegister ? <Register setIsRegister={setIsRegister} /> : <Login />}

                    <div className="flex justify-center mt-6">
                        <p className="text-sm text-[#ababab]">
                            {isRegister ? "Already have an account? " : "Don't have an account? "}
                            <a onClick={() => setIsRegister(!isRegister)} className="text-yellow-400 font-semibold hover:underline" href="#">
                                {isRegister ? "Sign In" : "Sign Up"}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth;