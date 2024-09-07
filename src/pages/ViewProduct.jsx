import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


function ViewProduct() {

  const {id} = useParams()
  const[product,setProduct] = useState({})
  const products = JSON.parse(localStorage.getItem("products"))




  useEffect(()=>{
    setProduct(products.find(item => item.id==id))
  },[])


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
              <Button variant="danger fs-6 rounded"><i className="fa-solid fa-heart">&nbsp;&nbsp; W i s h l i s t</i></Button>
              <Button variant="info fs-6 rounded"><i className="fa-solid fa-cart-shopping">&nbsp;&nbsp; c a r t </i></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewProduct
