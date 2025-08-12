import { configureStore } from "@reduxjs/toolkit";
//import customerSlice from "./slices/customerSlice"
//import cartSlice from "./slices/cartSlice";
//import userSlice from "./slices/userSlice";
import { customerSlice, cartSlice, userSlice } from "../index";


const store = configureStore({
    reducer: {
        customer: customerSlice,
        cart : cartSlice,
        user : userSlice
    },

    devTools: import.meta.env.NODE_ENV !== "production",
});

export default store;

console.log("Hello Perro xD")