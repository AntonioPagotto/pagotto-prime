import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/App.css';

import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Movie from '../pages/Movie';

const App = () => {

    return (
        <>
            <Header />
            <div className="container">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="movie/:id" element={<Movie />} />
                        <Route path="header" element={<Header />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </>
    )
};

export default App;
