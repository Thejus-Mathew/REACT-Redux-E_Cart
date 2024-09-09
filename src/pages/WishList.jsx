import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function WishList() {

  const {wishlist} = useSelector(state=>state.wishlistSlice)
  return (
    <>
      <Row className='m-3'>
        {
          wishlist?.length>0?wishlist.map((product,index)=>(
            <Col key={index} className='my-3'>
                <Card className='rounded' style={{ width: '18rem' }}>
                    <Link to={"/view/1"}>
                      <Card.Img variant="top" style={{aspectRatio:"286/180"}} src={product?.thumbnail} />
                    </Link>
                    <Card.Body>
                        <Card.Title>{product?.title}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <div className="buttons d-flex justify-content-between">
                            <Button variant="danger rounded px-3"><i className="fa-solid fa-trash"></i></Button>
                            <Button variant="info rounded px-3"><i className="fa-solid fa-cart-shopping"></i></Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
          )):<p>hehe</p>
        }
      </Row>
    </>
  )
}

export default WishList
