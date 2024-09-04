import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import productSlice, { fetchProductData } from '../Redux/productSlice';

function ViewProduct() {



  const location = useLocation()
  let currentPath = location.pathname;
  currentPath = currentPath.substring(6)
  const[id,setId] = useState(1)
  const[prod,setProd] = useState({})

  useEffect(()=>{
    setId(Number(currentPath))
  },[])





  const{loading,error,products} = useSelector((state)=>state.productSlice)



  useEffect(()=>{
    setProd(products.find(item=>item.id==id))  
  },[id])
  

  
  return (
    <>
      <div className="container my-3">
        <div className="row d-flex justify-content-center flex-wrap">
          <div className="col-6 border" style={{minWidth:"400px"}}>
            <img src={prod.thumbnail} alt="" width={"100%"} />
          </div>
          <div className="col-6 my-3 border px-5" style={{minWidth:"400px"}}>
            <p>Product Id:{prod.id}</p>
            <h1>{prod.title}</h1>
            <p className='fs-5'>{prod.description}</p>
            <h4>Price: ${prod.price}</h4>
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
