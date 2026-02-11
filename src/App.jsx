import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MiniLP from './pages/MiniLP';
import Pet from './pages/Pet';
import Printing3D from './pages/Printing3D';
import Dental from './pages/Dental';
import HayFever from './pages/HayFever';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MiniLP />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/3dprinter" element={<Printing3D />} />
        <Route path="/dental" element={<Dental />} />
        <Route path="/hayfever" element={<HayFever />} />
      </Routes>
    </Router>
  );
}
