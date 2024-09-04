import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductData } from '../Redux/productSlice'

function Home() {



  const dispatch = useDispatch()

  const{loading,error,products} = useSelector((state)=>state.productSlice)


  const[prod,setProd] = useState([])
  


  useEffect(()=>{
    dispatch(fetchProductData())
  },[])

  useEffect(()=>{
    setProd(products)  
  },[products])  


  return (
    <>
      <Row className='m-3'>

        {
          prod?.length>0?prod.map((item,index)=>(


            <Col key={index} className='my-3'>
                <Card className='rounded' style={{ width: '18rem'}}>
                    <Link to={`/view/${item?.id}`}>
                      <Card.Img variant="top" style={{aspectRatio:"286/180"}} src={item?.thumbnail} />
                    </Link>
                    <Card.Body>
                        <Card.Title style={{height:"2.8rem"}}>{item?.title}</Card.Title>
                        <Card.Text style={{height:"4.8rem",overflow:"hidden",textOverflow:"ellipsis",
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical'
                        }}>
                        {item?.description}
                        </Card.Text>
                        <div className="buttons d-flex justify-content-between">
                            <Button variant="danger rounded px-3"><i className="fa-solid fa-heart"></i></Button>
                            <Button variant="info rounded px-3"><i className="fa-solid fa-cart-shopping"></i></Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>


            
          )):<p>No Products to display</p>
        }



      </Row>
    </>
  )
}

export default Home
