import React from 'react';
import './App.css';
import "./font/Quinquefive-ALoRM.ttf";
import Navbar from './components/navbar';
import Gridflow from './components/gridflow';
import Footer from './components/footer';
import Hero from './components/hero';

function App() {
  return (
    <>
    <Navbar />
    <Gridflow></Gridflow>
    <Hero/>
    </>
  );
}

export default App;
