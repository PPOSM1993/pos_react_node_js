import { configureStore } from "@reduxjs/toolkit";
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