import { Header } from './components/header/header';
import { Route, Routes } from "react-router-dom";
import { routerLinks } from "./router/router";
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Contact from './pages/contact/contact';
import { Footer } from './components/footer/footer';
import { ShopDetail } from './pages/shop/pages/shopdetail';
import { ShopCart } from './pages/shop/pages/shopping-cart/shopcart';


function App() {
  return <>
    <Header/>
    <Routes>
            <Route path={routerLinks.HOME} element={<Home/>}></Route>
            <Route path={routerLinks.SHOP} element={<Shop/>}></Route>
            <Route path={routerLinks.CONTACT} element={<Contact/>}></Route>
            <Route path={routerLinks.DETAIL} element={<ShopDetail/>}></Route>
            <Route path={routerLinks.CART} element={<ShopCart/>}></Route>
    </Routes>
    <Footer/>
  </>
}

export default App;
