import React from 'react';
import { useParticleAnimation } from './animation/particle_waves';

export default function Home() {
    useParticleAnimation();
    
    return (
        <section id="home" className="mt-15 flex-grow flex items-center h-screen  z-20">
         
            <div className="ml-52 -mt-12 w-1/2">
                <h1 className="text-xl mb-3 font-medium text-name ">Hi, my name is</h1>
                <h2 className="text-[55px] font-bold">Liz Antoinette Anguren</h2>
                <p className="text-[50px] -mt-2 mb-6 text-zinc-400 font-bold">Full Stack Developer</p>
                <p className="mb-8 text-base text-zinc-200 leading-relaxed">I design, develop, and manage web projects, ensuring functionality, usability, and adherence to objectives while staying updated with emerging technologies.</p>
                <div className="flex justify-start mt-[3.5rem] space-x-8">
                    <a href="#resume" className="inline-flex items-center justify-center w-48 h-12 rounded-xl font-semibold bg-transparent border border-[#56949F] text-[#9CCFD8] px-4 hover:bg-[#9CCFD8] hover:text-[#191724] transition-colors duration-300 ease-in-out">Resume</a>
                    <a href="#contact" className="inline-flex items-center justify-center w-48 h-12 rounded-xl font-semibold bg-transparent border border-[#B4637A] text-[#EBBCBA] px-4 hover:bg-[#EBBCBA] hover:text-[#191724] transition-colors duration-300 ease-in-out">Contact Me</a>
                </div>
            </div>

            <canvas id="particle-canvas" className="absolute bottom-0 left-0 w-full h-80"></canvas>
            
        </section>


    );
  }
  