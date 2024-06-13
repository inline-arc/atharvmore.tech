import React from "react";
import '../App.css';
import "../font/Quinquefive-ALoRM.ttf";

export default function Navbar() {
  return (
    <div className="App flex justify-between items-center h-16 bg-[#80E93D] text-black border-0 m-9 rounded-2xl drop-shadow-sm sticky">
      <a href="/" className="pl-8">Atharv x MORE</a>
      <div className="pr-12">
        <a href="/contact" className="p-4 ">About</a>
        <a href="/projects" className="p-4">Projects</a>
        <a href="/BreakOut" className="p-4">BreakOut</a>
        <a href="/Contact" className="p-4 bg-white rounded-full">Contant</a>
    </div>
    <input class="hidden" type="checkbox" id="toggle_1" value="1"/>
	<label class="flex items-center relative w-12 border-black h-6 p-1 m-10 rounded-full border-2" for="toggle_1">
		<span class="w-4 h-4 bg-black rounded-full"></span>
	</label>
  </div>
  );
}