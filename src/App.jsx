import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MaterialPage from './pages/MaterialPage';
import ChakraPage from './pages/ChakraPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/material" element={<MaterialPage />} />
      <Route path="/chakra" element={<ChakraPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
