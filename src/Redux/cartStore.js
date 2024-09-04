import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";


const cartStore = configureStore({
    reducer:{
        productSlice
    }
})

export default cartStore