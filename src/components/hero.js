import React from "react";
import Myself from "../img/itsme.png"



export default function Hero() {
    return (<>
    <div className="flex justify-center items-center min-h-3.5 text-black border-0 m-9 rounded-2xl drop-shadow-xl sticky">
        <img src={Myself} alt="Myself" className="h-96 w-96 rounded-full m-24"/>
        <div className="flex flex-col justify-center items-center text-xl bg-opacity-90 bg-[#7fe93de7]  p-6 rounded-3xl mr-9 gap-6">
            <h1 className="text-6xl font-mono">ATHARV MORE</h1>
            <h2 className="text-2x justify-normal font-mono">I'm an Electronics Engineering student with a passion for exploring technology and solving complex problems. I enjoy developing web applications and creating engaging user experiences using Flutter. My interest in blockchain drives me to explores and their potential applications of mys skills. I thrive on learning new things and applying them to real-world challenges. With a focus on innovation, I’m always looking for opportunities to expand my skills and contribute to meaningful projects.</h2>
            </div>
    </div>
    </>)
}