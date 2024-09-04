import React from 'react'
import { Badge, Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-light">
            <Container>
                <Navbar.Brand className='fs-1'>
                  <Link style={{textDecoration:"none"}}  to={'/'}><i className="fa-solid fa-truck fa-bounce"></i> E-Cart</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Link className='fs-3 mx-3 mt-4 me-5' style={{textDecoration:"none",color:"rgb(150,150,150)"}} to={'/wishlist'}><i className="fa-solid fa-heart"></i>WishList<Badge bg="danger rounded fs-6 position-absolute top-5 ms-1">9</Badge></Link>
                    <Link className='fs-3 mx-3 mt-4' style={{textDecoration:"none",color:"rgb(150,150,150)"}} to={'/cart'}><i className="fa-solid fa-heart"></i>Cart<Badge bg="danger rounded fs-6 position-absolute top-5 ms-1">9</Badge></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
