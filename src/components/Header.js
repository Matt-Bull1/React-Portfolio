import React, { useState } from 'react';
import Navbar from './Navbar';


function Header(props) {
    // return html along with navigating for portfolio through the Header component 
    return (
    <header className="header image-graphic">

    <h1>Matthew Bull</h1>
    <Navbar currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
    </header>
    );
}

export default Header; 