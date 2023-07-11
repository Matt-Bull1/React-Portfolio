import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';


function App() {

    const [currentPage, setCurrentPage] = useState('About');

    //render page function for selected nav link
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        // if (currentPage === 'Projects') {
        //     return <Projects />
        // }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        // if (currentPage === 'Resume') {
        //     return <Resume />
        // }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer />
        </div>
    );
}

export default App;