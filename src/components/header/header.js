import React from "react";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <a alt="home" href="/" className="header__logo">
                    NZH
                </a>
                <div className="header__main-links">
                    <a href="/">One</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
