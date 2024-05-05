import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalaxyGridPage from './pages/GalaxyGridPage';
// import FrothPage from './pages/FrothPage';
// import ClipprPage from './pages/ClipprPage';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/galaxy-grid" element={<GalaxyGridPageWithScrollToTop />} />
                {/* <Route path="/froth" element={<FrothPage />} />
                <Route path="/clippr" element={<ClipprPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

function GalaxyGridPageWithScrollToTop() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <GalaxyGridPage />;
}
