import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function WishList() {
  return (
    <>
      <Row className='m-3'>
        <Col className='my-3'>
            <Card className='rounded' style={{ width: '18rem' }}>
                <Link to={"/view/1"}>
                  <Card.Img variant="top" style={{aspectRatio:"286/180"}} src="https://live.staticflickr.com/906/41964874051_63742c39b8_m.jpg" />
                </Link>
                <Card.Body>
                    <Card.Title>Product</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <div className="buttons d-flex justify-content-between">
                        <Button variant="danger rounded px-3"><i className="fa-solid fa-trash"></i></Button>
                        <Button variant="info rounded px-3"><i className="fa-solid fa-cart-shopping"></i></Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
      </Row>
    </>
  )
}

export default WishList
