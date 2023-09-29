import React from "react"
import coverImg from "./images/desk.png"

export default function Header() {
    return (
        <nav className="header">
            <span className="start-link"><a>Start Bootstrap</a></span>
            <span className="navs"><a>HOME</a></span>
            <span className="navs"><a>ABOUT</a></span>
            <span className="navs"><a>SAMPLE POST</a></span>
            <span className="navs"><a>CONTACT</a></span>
            <div className="main-text">Clean Blog</div>
            <div className="main-subtext">A Blog Theme by Start Bootsrap</div>
        </nav>

    )
}
