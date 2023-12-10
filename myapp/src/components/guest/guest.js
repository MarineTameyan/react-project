import React from "react";
import { Route, Routes } from "react-router-dom";
import { routerLinks } from "../../router/router";
import Home from "../../pages/Web-pages/home/home";
import Shop from "../../pages/Web-pages/shop/shop";
import Contact from "../../pages/Web-pages/contact/contact";
import { ShopDetail } from "../../pages/Web-pages/shopdetails/shopdetail";
import { ShopCart } from "../../pages/Web-pages/shopping-cart/shopcart";
import { Checkout } from "../../pages/Web-pages/checkout/checkout";
import { Login } from "../../pages/Web-pages/login/login";
import { Registration } from "../../pages/Web-pages/registration/registration";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export const Guest = () => {
    return <>
        <Header />
        <Routes>
            <Route path={routerLinks.HOME} element={<Home />}></Route>
            <Route path={routerLinks.SHOP} element={<Shop />}></Route>
            <Route path={routerLinks.CONTACT} element={<Contact />}></Route>
            <Route path={routerLinks.DETAIL} element={<ShopDetail />}></Route>
            <Route path={routerLinks.CART} element={<ShopCart />}></Route>
            <Route path={routerLinks.CHECKOUT} element={<Checkout />}></Route>
            <Route path={routerLinks.LOGIN} element={<Login />}></Route>
            <Route path={routerLinks.REGISTRATION} element={<Registration />}></Route>
        </Routes>
        <Footer />
    </>
}