
import { Route, Routes } from "react-router-dom"
import Navbar from "./componets/Navbar"
import Home from "./pages/Home"
import Toptext from "./componets/Toptext"
import Footer from "./componets/Footer"
import Shop from "./pages/Shop"
import Product from "./pages/Product"
import Whey from "./pages/Whey"
import Vegan from "./pages/Vegan"
import Creatine from "./pages/Creatine"
import Preworkout from "./pages/Preworkout"
import Multivitamin from "./pages/Multivitamin"
import Omega from "./pages/Omega"
import Cart from "./pages/Cart"
import Auth from "./pages/Auth"
import Order from "./pages/Order"
import Myorders from "./pages/Myorders"
import Verify from "./pages/Verify"
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <>

<ToastContainer position="bottom-right" autoClose={3000} />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/shop/whey' element={<Whey />} />
        <Route path='/myorders' element={<Myorders />} />
        <Route path='/shop/vegan' element={<Vegan />} />
        <Route path='/shop/creatine' element={<Creatine />} />
        <Route path='/shop/preworkout' element={<Preworkout />} />
        <Route path='/shop/multivitamin' element={<Multivitamin />} />
        <Route path='/shop/omega' element={<Omega />} />
        <Route path='/order' element={<Order />} />
        <Route path="/product/:productid" element={<Product />} />
        <Route path='/login' element={<Auth register={false} />} />
        <Route path='/register' element={<Auth register={true} />} />


      </Routes>

      <Footer />

    </>
  )
}

export default App
