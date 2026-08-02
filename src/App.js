import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Cellar from './pages/Cellar';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter basename="/vampire_shop">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cellar" element={<Cellar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
