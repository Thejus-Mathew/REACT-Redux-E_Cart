import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/wishlistSlice'
import { addToCart, removeFromCart } from '../Redux/cartSlice'

function WishList() {

  const dispatch = useDispatch()
  const {wishlist} = useSelector(state=>state.wishlistSlice)
  const cart = useSelector(state=>state.cartSlice)

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
                            <Button variant="primary rounded px-3" onClick={()=>dispatch(removeFromWishlist(product?.id))}><i className="fa-solid fa-trash"></i></Button>
                            {(cart.find(item=>item.id==product.id))?<Button variant="info rounded px-3" onClick={()=>handleCart(product)}><i className="fa-solid fa-cart-shopping"></i></Button>:<Button variant="primary rounded px-3" onClick={()=>handleCart(product)}><i className="fa-solid fa-cart-shopping"></i></Button>}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
          )):<p>Wishlist is empty</p>
        }
      </Row>
    </>
  )
}

export default WishList
