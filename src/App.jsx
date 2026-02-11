import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pet from './pages/Pet';
import Printing3D from './pages/Printing3D';
import Dental from './pages/Dental';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/3dprinter" element={<Printing3D />} />
        <Route path="/dental" element={<Dental />} />
      </Routes>
    </Router>
  );
}
