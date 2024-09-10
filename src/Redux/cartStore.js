import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import wishlistSlice from "./wishlistSlice";
import cartSlice from "./cartSlice";


const cartStore = configureStore({
    reducer:{
        productSlice,
        wishlistSlice,
        cartSlice
    }
})

export default cartStore