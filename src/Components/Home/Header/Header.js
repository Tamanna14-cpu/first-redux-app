import React from 'react';
import headerImg from '../../../image/header.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={headerImg} alt="" className="w-100 header-img" />
            <h1 className="centered fw-bold">LOVE & TRAVEL</h1>
            <h4 className="centered-2">Throughout our lives, people have thought that because we keep traveling and searching for new things to do, we are not focused.</h4>
        </div>
    );
};

export default Header;