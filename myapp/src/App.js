import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Route, Routes, useNavigate } from "react-router-dom";
import { routerLinks } from "./router/router";
import Home from "./pages/Web-pages/home/home";
import Shop from "./pages/Web-pages/shop/shop";
import Contact from "./pages/Web-pages/contact/contact";
import { ShopDetail } from "./pages/Web-pages/shopdetails/shopdetail";
import { Checkout } from "./pages/Web-pages/checkout/checkout";
import { ShopCart } from './pages/Web-pages/shopping-cart/shopcart';
import { Login } from './pages/Web-pages/login/login';
import { Registration } from './pages/Web-pages/registration/registration';
import { useEffect } from 'react';
import { Auth } from './components/auth/auth';
import { Guest } from './components/guest/guest';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    let tokenData = localStorage.getItem('token')
    setToken(tokenData)
    if(token){
navigate(routerLinks.CATEGORIES)
    }
    
}, []);

// if(userData.userLoading){
//    <p>Loading.........</p>
// }
return  token ?  <Auth/> : <Guest/>

}

export default App;
