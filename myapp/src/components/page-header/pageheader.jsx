import React from "react";
import "./pageheader.scss"

const handleLogout = () =>{
    localStorage.removeItem("token")
    window.location.reload()

}

export const PageHeader = ({title}) =>{
    return <div className="pageheader">
        <div className="page-title">
            <h1>{title}</h1>
        </div>
        <div className="logout-button">
            <button onClick={handleLogout}>Log Out</button>
        </div>
    </div>
}