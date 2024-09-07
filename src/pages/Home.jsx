import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductData } from '../Redux/productSlice'
import { addToWishlist } from '../Redux/wishlistSlice'


function Home() {



  const dispatch = useDispatch()

  const{loading,error,products} = useSelector((state)=>state.productSlice)  

  useEffect(()=>{
    dispatch(fetchProductData())
  },[])

  

  return (
    <>
      {loading?<div className='d-flex justify-content-center align-items-center gap-4' style={{height:"80vh",fontWeight:"bold"}}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <span className='fs-3'>Loading...</span>
      </div>
      :<Row className='m-3'>
          {products?.length>0&&products.map((product,index)=>(
              <Col key={index} className='my-3'>
                <Card className='rounded' style={{ width: '20rem'}}>
                    <Link to={`/view/${product.id}`}>
                      <Card.Img variant="top" style={{aspectRatio:"286/180",marginBottom:"10px"}} src={product.thumbnail} />
                    </Link>
                    <Card.Body>
                        <Card.Title>{product.title.slice(0,20)}</Card.Title>
                        <div className="buttons d-flex justify-content-between mt-4">
                            <Button variant="danger rounded px-3" onClick={()=>(dispatch(addToWishlist(product)))}><i className="fa-solid fa-heart"></i></Button>
                            <Button variant="info rounded px-3"><i className="fa-solid fa-cart-shopping"></i></Button>
                        </div>
                    </Card.Body>
                </Card>
              </Col>
          ))
          }
        </Row>
      }
    </>
  )
}

export default Home
