import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import wishlistSlice from "./wishlistSlice";


const cartStore = configureStore({
    reducer:{
        productSlice,
        wishlistSlice
    }
})

export default cartStore