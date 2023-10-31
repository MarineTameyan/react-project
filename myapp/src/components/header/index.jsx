import React from "react";
import { routerLinks } from "../../router/router";
import { NavLink } from "react-router-dom";
import "./header.css"

export const Header = () => {
    return <header>
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
        </header>
}