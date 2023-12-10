import React, { useEffect, useState } from "react";
import "./header.scss"
import { routerLinks } from "../../router/router";
import { NavLink, useNavigate } from "react-router-dom";
import Basket from "../../assets/images/purchase.png"
import { useProductContext } from "../../context/context";

export const Header = () => {
  const { productList } = useProductContext()
  const [productLength, setProductLength] = useState(0)
  const navigate = useNavigate()

  const handleBasketClick = () => {
    navigate('/shop/shopping-cart')
  }

  const handleLoginButton = () => {
    navigate('/login')
  }

  const handleRegistrationButton = () => {
    navigate('/registration')
  }

  useEffect(() => {
    let sum = 0
    productList.forEach(item => {
      sum += item.count
    })
    setProductLength(sum)
  }, [productList])

  return <header>
    <div className="G-container G-justify-between">
      <div className="header-block G-align-center">
        <div className="logo">
          <span className="first">MULTI</span>
          <span className="second">SHOP</span>
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink to={routerLinks.HOME}>Home</NavLink>
            </li>
            <li>
              <NavLink to={routerLinks.SHOP}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={routerLinks.CONTACT}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="basket">
        <button onClick={handleLoginButton}>Log In</button>
        <button onClick={handleRegistrationButton}>Registartion</button>
        <img src={Basket} alt="" />
        <p onClick={handleBasketClick}>{productLength}</p>
      </div>
    </div>
  </header>
}