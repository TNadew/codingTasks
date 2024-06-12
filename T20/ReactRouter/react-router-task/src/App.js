import React, { useState } from 'react';
import './App.css';
import Home from "./components/Home"
import Products from "./components/Products"
import About from "./components/About"
import NavigationMenu from './components/NavMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TotalPriceProvider } from './components/TotalPriceContext';


export default function App() {  
  return (
    <Router>
      
      <div className="App">
      <NavigationMenu />
      <TotalPriceProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Products" element={<Products  />} />
          <Route path="/about" element={<About key="about" />}  />
        </Routes>
        </TotalPriceProvider>
      </div>
      
    </Router>

  );
}
