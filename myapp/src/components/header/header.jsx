import React from "react";
import { routerLinks } from "../../router/router";
import { NavLink } from "react-router-dom";
import "./header.scss"

export const Header = () => {
    return <header>
     <div className="G-container">
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
     </div>
        </header>
}