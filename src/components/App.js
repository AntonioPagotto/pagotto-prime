import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/App.css';

import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Movie from '../pages/Movie';

const App = () => {

    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="movie/:id" element={<Movie />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
};

export default App;
