import React from "react";
import '../App.css';
import "../font/Quinquefive-ALoRM.ttf";

export default function Navbar() {
  return (
    <div className="App flex justify-between items-center h-16 bg-[#80E93D] text-black relative border-0 m-9 rounded-2xl drop-shadow-xl">
      <a href="/" className="pl-8">Atharv x MORE</a>
      <div className="pr-8">
        <a href="/contact" className="p-4 ">About</a>
        <a href="/projects" className="p-4">Projects</a>
        <a href="/database" className="p-4">BreakOut</a>
        <a href="/database" className="p-4 bg-white rounded-full">Contant</a>
      </div>
    </div>
  );
}