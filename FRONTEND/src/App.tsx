import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'
import { ToastContainer } from 'react-toastify'
import AllProducts from './components/AllProducts'
import SingleProduct from './components/SingleProduct'
import AddToCart from './components/AddToCart'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='product' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<Login />} />
            <Route path='allproducts' element={<AllProducts />} />
            <Route path='product/:id' element={<SingleProduct />} />
            <Route path='cart' element={<AddToCart />} />
          </Route>
          <Route path='register' element={<Register />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App