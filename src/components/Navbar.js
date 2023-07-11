import React, { useState } from 'react';

function Navbar({ currentPage, handlePageChange }) {

    return (
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="#about-me"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#Projects"
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                    >
                        Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#Contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;