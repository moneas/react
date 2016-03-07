import React from 'react';

let styles = {
    header: {
        height: '60px',
        width: '180px'
    },
    headerParent: {
        width: '180px'
    }
};

let Navbar = (props) => (
    <div className="entrance-transition nav-wrapper show">
        <header className="header blog">
            <nav className="navigation">
                <div className="logo" style={styles.headerParent}>
                    <a href="/">
                        <div style={styles.header}></div>
                    </a>
                </div>
                <div className="menu">
                    <ul>
                        <li className="navigation-link"><a href="#">Home</a></li>
                        <li className="navigation-link"><a href="#" onclick="onButtonClick()">About Us</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
);

export default Navbar;