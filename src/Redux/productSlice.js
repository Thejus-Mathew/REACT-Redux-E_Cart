import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";



export const fetchProductData = createAsyncThunk('allProducts/fetchProductData',()=>{
    return axios.get("https://dummyjson.com/products").then(result => result.data.products)
})


const productSlice = createSlice({
    name:'allProducts',
    initialState:{
        products:[],
        loading:false,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductData.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchProductData.fulfilled,(state,action)=>{
            state.loading = false
            state.products = action.payload
            state.error = "no error"
        })
        builder.addCase(fetchProductData.rejected,(state)=>{
            state.loading = false
            state.products = []
            state.error = "API Failed, Cant fetch the data..."
        })
    }
})

export default productSlice.reducer