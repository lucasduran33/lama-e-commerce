import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import Home from './Components/Home/Home'
import Cart from './Components/Cart'
import ProductDetail from './Components/Product/ProductDetail'
import Register from './Components/Forms/Register';
import Login from './Components/Forms/Login';
import ProductList from './Components/Product/ProductsList'
function App() {

  return (
    <BrowserRouter>
   
    <Routes>
    <Route path={'/'} element={<Home/>}/>
      <Route path={'/cart'} element={<Cart/>}/>
      <Route path={'/product-detail'} element={<ProductDetail/>}/> 
      <Route path={'/product-list'} element={<ProductList/>}/>
      <Route path={'/register'} element={<Register/>}/>
      <Route path={'/login'} element={<Login/>}/>

    </Routes>
    </BrowserRouter> )

}
// PRODUCT DETAIL -> SOLO UN PRODUCTO PRODUCTLIST -> VARIOS PRODUCTOS
export default App
