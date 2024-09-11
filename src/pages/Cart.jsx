import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, emptyCart, minusQuantity, removeFromCart } from '../Redux/cartSlice'
import { Link } from 'react-router-dom'

function Cart() {

  const cart = useSelector(state=>state.cartSlice)
  const dispatch = useDispatch()
  
  return (
    <div>
      <div className="container-fluid px-5 my-3">
        <div className="row d-flex flex-wrap">
          <div className="col p-1 border">
            <table className='table' style={{width:"70vw"}}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>image</th>
                  <th>Quantity</th>
                  <th>prize</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {
                cart?.length>0?cart.map((product,index)=>(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{product?.title}</td>
                <td><img style={{width:"100px"}} src={product?.thumbnail} alt="" /></td>
                <td><button className='btn btn-primary py-0 px-2 mx-1' onClick={()=>dispatch(minusQuantity(product))}>-</button> {product.quantity} <button className='btn btn-primary py-0 px-2 mx-1' onClick={()=>dispatch(addQuantity(product))}>+</button></td>
                <td>${(product?.price*product?.quantity).toFixed(2)}</td>
                <td><button className='btn' onClick={()=>dispatch(removeFromCart(product?.id))}><i className="fa-solid text-danger fa-trash"></i></button></td>
              </tr>)):
              <p>Cart is Empty</p>
              }
              </tbody>
            </table>
          </div>
          <div className="col border">
            <Card className='d-flex gap-4 p-3'>
              <h1>cart summary</h1>
              <h4>total products: {cart?.length}</h4>
              <h5>Total: ${cart?.map(item=>item?.price*item?.quantity).reduce((a,b)=>a+b,0).toFixed(2)}</h5>
              <Button>Checkout</Button>
            </Card>
          </div>
        </div>
        <div className='d-flex justify-content-around mt-5 mb-3'>
          <Link to='/'><button className='btn btn-info'>Shop More</button></Link>
        <button className='btn btn-danger' onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
