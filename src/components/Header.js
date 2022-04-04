import React from "react"
import logo from "../images/logo.png"

export default function Header() {
    return (
        <nav className="header">
            <a href="index.html">
            <img src={logo} className="header-img"/> </a>
        </nav>
    )
}