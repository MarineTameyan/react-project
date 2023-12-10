import React from "react";
import "./pageheader.scss"

export const PageHeader = ({title}) =>{
    return <div className="pageheader">
        <div className="logout-button">
            <button>Log Out</button>
            </div>
        <div className="page-title">
            <h1>{title}</h1>
        </div>
    </div>
}