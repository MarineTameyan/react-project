import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routerLinks } from "../../router/router";
import { Admin } from "../../pages/Admin-pages/admin/admin";
import { Notifications } from "../../pages/Admin-pages/admin/pages/Notifications/notifications";
import { Settings } from "../../pages/Admin-pages/admin/pages/Settings/settings";
import { Category } from "../../pages/Admin-pages/admin/pages/Categories/category";
import { Products } from "../../pages/Admin-pages/admin/pages/Products/products";
import "./auth.scss";


export const Auth = () => {
    return <div className="G-admin-wrapper G-flex">
        <div className="G-admin-sidebar">
            <Admin></Admin>
        </div>
        <div className="G-pages">
            <Routes>
                <Route path={routerLinks.CATEGORIES} element={<Category />} />
                <Route path={routerLinks.PRODUCTS} element={<Products />} />
                <Route path={routerLinks.NOTIFICATIONS} element={<Notifications />} />
                <Route path={routerLinks.SETTINGS} element={<Settings />} />
                <Route path={'/*'} element={<Navigate to={routerLinks.CATEGORIES}/>}/>
            </Routes>
        </div>
    </div>
}