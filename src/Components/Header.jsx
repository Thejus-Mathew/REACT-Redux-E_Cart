import React, { useEffect, useState } from 'react'
import { Badge, Container, Nav, Navbar} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const[wishlistCount,setWishlistCount] = useState(0)
  const[cartCount,setCartCount] = useState(0)
  const {wishlist} = useSelector(state=>state.wishlistSlice)
  const cart = useSelector(state=>state.cartSlice)

  useEffect(()=>{
    setWishlistCount(wishlist.length)
    setCartCount(cart.length)
  },[wishlist,cart])


  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand className='fs-1'>
                  <Link style={{textDecoration:"none"}} className='text-light' to={'/'}><i className="fa-solid fa-truck fa-bounce"></i> E-Cart</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Link className='fs-3 mx-3 mt-4 me-5' style={{textDecoration:"none",color:"rgb(190,190,190)"}} to={'/wishlist'}><i className="fa-solid fa-heart"></i>WishList<Badge bg="danger rounded fs-6 position-absolute top-5 ms-1">{wishlistCount}</Badge></Link>
                    <Link className='fs-3 mx-3 mt-4' style={{textDecoration:"none",color:"rgb(190,190,190)"}} to={'/cart'}><i className="fa-solid fa-heart"></i>Cart<Badge bg="info rounded fs-6 position-absolute top-5 ms-1">{cartCount}</Badge></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
