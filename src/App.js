import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Cellar from './pages/Cellar';
import Footer from './pages/Footer';
import Mission from './pages/Mission';
import Collection from './pages/Collection';
import ScrollToTop from './pages/ScrollToTop';
import Cart from './pages/Cart';


function App() {
  return (
    <BrowserRouter basename="/vampire_shop">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cellar" element={<Cellar />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/our-collection" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
