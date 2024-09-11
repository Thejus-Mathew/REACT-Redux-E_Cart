import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                const newState = state.filter(item=>item.id!=existingProduct.id)
                existingProduct.quantity++
                state=([...newState,existingProduct])
            }else{
                state.push({...action.payload,quantity:1})
            }
        },
        removeFromCart:(state,action)=>{
            return state.filter(item=>item.id != action.payload)
        },
        emptyCart:(state)=>{
            return state= []
        },
        addQuantity:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                const newState = state.filter(item=>item.id!=existingProduct.id)
                existingProduct.quantity++
                state=([...newState,existingProduct])
            }
        },
        minusQuantity:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct && existingProduct?.quantity>1){
                const newState = state.filter(item=>item.id!=existingProduct.id)
                existingProduct.quantity--
                state=([...newState,existingProduct])
            }
        }

    }
})

export default cartSlice.reducer
export const {addToCart,removeFromCart,emptyCart,addQuantity,minusQuantity} = cartSlice.actions