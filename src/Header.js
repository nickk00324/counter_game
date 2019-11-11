import React from 'react';
import './Header.css';

const Header = ({initialTarget}) => {
    return(
        <header className="header-container">
            <h1 className="main-header">welcome to the counter game</h1>
            <h2 className="sub-header">click the button {initialTarget} times to win</h2>
        </header>
    );
}

export default Header;