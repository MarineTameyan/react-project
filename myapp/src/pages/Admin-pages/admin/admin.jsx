import React from "react";
import './admin.scss'
import { NavLink } from "react-router-dom";
import { routerLinks } from "../../../router/router";


export const Admin = () => {
  return (
    <div className="admin-page">
      <div className="admin">
        <div className="home-button">
          <button>HOME</button>
        </div>
        <div className="admin-links">
          <ul>
            <li>
              <NavLink to={routerLinks.CATEGORIES}>Category</NavLink>
            </li>
            <li>
              <NavLink to={routerLinks.PRODUCTS}>Products</NavLink>
            </li>
            <li>
              <NavLink to={routerLinks.NOTIFICATIONS}>Notifications</NavLink>
            </li>
            <li>
              <NavLink to={routerLinks.SETTINGS}>Settings</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
