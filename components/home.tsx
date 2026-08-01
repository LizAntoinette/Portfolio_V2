import React from 'react';
import { useParticleAnimation } from './hooks/particle_waves';

export default function Home() {
    useParticleAnimation();
    
    return (
        <section id="home" className="mt-15 flex-grow flex items-center h-screen  z-20">
         
            <div className="ml-52 -mt-[75px] xl:w-1/2">
                <h1 data-aos="fade-up" data-aos-delay="600" className="text-xl mb-3 font-medium text-name ">Hi, my name is</h1>
                <h2 data-aos="fade-up" data-aos-delay="700"className="text-[53px] font-bold">Liz Antoinette Anguren</h2>
                <p data-aos="fade-up" data-aos-delay="800" className="text-[48px] -mt-2 mb-6 text-muted font-bold">Full Stack Developer</p>
                <p data-aos="fade-up" data-aos-delay="900" className="mb-8 text-base text-secondary leading-relaxed">I design, develop, and manage web projects, ensuring functionality, usability, and meeting goals while staying current with new technologies.</p>
                <div data-aos="fade-up" data-aos-delay="1000" className="flex justify-start mt-[3.5rem] space-x-8">
                    <a href="files/Liz_CV.pdf" target="_blank" className="outline-action resume-action inline-flex items-center justify-center w-48 h-12 rounded-xl font-semibold border px-4">Resume</a>
                    <a href="#contact" className="outline-action contact-action inline-flex items-center justify-center w-48 h-12 rounded-xl font-semibold border px-4">Contact Me</a>
                </div>
            </div>

            <canvas id="particle-canvas" className="absolute bottom-0 left-0 w-full h-5/6"></canvas>
            
        </section>


    );
  }
