import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import WishList from './pages/WishList'
import Cart from './pages/Cart'
import ViewProduct from './pages/ViewProduct'
import Home from './pages/Home'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      <Header/>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/view/:id' element={<ViewProduct/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>


      <Footer/>
    </>
  )
}

export default App
