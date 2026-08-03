import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Cellar from './pages/Cellar';
import Footer from './pages/Footer';
import Mission from './pages/Mission';
import Collection from './pages/Collection';
import ScrollToTop from './pages/ScroolToTop';


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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
