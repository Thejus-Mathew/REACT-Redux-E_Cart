import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishlist, removeFromWishlist } from '../Redux/wishlistSlice'
import { addToCart, removeFromCart } from '../Redux/cartSlice'

function ViewProduct() {

  const {id} = useParams()
  const[product,setProduct] = useState({})
  const products = JSON.parse(localStorage.getItem("products"))

  const {wishlist} = useSelector(state=>state.wishlistSlice)
  const cart = useSelector(state=>state.cartSlice)
  const dispatch = useDispatch()


  useEffect(()=>{
    setProduct(products.find(item => item.id==id))
  },[])

  const handleWishlist = (product) =>{
    const existingProduct = wishlist.find(item=>item.id==product.id)
    if(existingProduct) {
      dispatch(removeFromWishlist(product.id))
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = (product) =>{
    const existingCartProduct = cart.find(item=>item.id==product.id)
    if(existingCartProduct) {
      console.log("removing");
      dispatch(removeFromCart(product.id))
    }else{
      dispatch(addToCart(product))
    }
  }


  return (
    <>
      <div className="container my-3">
        <div className="row d-flex justify-content-center flex-wrap">
          <div className="col-6 border" style={{minWidth:"400px"}}>
            <img src={product?.thumbnail} alt="" width={"100%"} />
          </div>
          <div className="col-6 my-3 border px-5" style={{minWidth:"400px"}}>
            <p>Product Id:{product?.id}</p>
            <h1>{product?.title}</h1>
            <p className='fs-5'>{product?.description}</p>
            <h4>Price: ${product?.price}</h4>
            <div className="buttons mt-5 d-flex justify-content-between">
            {(wishlist.find(item=>item.id==product.id))?<Button variant="danger fs-6 rounded" onClick={()=>handleWishlist(product)}><i className="fa-solid fa-heart">&nbsp;&nbsp; W i s h l i s t</i></Button>:<Button variant="primary fs-6 rounded" onClick={()=>handleWishlist(product)}><i className="fa-solid fa-heart">&nbsp;&nbsp; W i s h l i s t</i></Button>}
            {(cart.find(item=>item.id==product.id))?<Button onClick={()=>handleCart(product)} variant="info fs-6 rounded"><i className="fa-solid fa-cart-shopping">&nbsp;&nbsp; c a r t </i></Button>:<Button onClick={()=>handleCart(product)} variant="primary fs-6 rounded"><i className="fa-solid fa-cart-shopping">&nbsp;&nbsp; c a r t </i></Button>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewProduct
