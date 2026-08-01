import React from 'react';
import { useParticleAnimation } from './hooks/particle_waves';

export default function Home() {
    useParticleAnimation();
    
    return (
        <section id="home" className="relative flex min-h-[100svh] flex-grow items-center pt-28 pb-16 sm:pt-32 lg:py-0 z-20">
         
            <div className="mx-6 mt-0 max-w-3xl sm:mx-12 lg:ml-52 lg:mr-0 lg:-mt-[75px] xl:w-1/2">
                <h1 data-aos="fade-up" data-aos-delay="600" className="text-xl mb-3 font-medium text-name ">Hi, my name is</h1>
                <h2 data-aos="fade-up" data-aos-delay="700" className="text-[clamp(2.35rem,5vw,3.3125rem)] leading-tight font-bold">Liz Antoinette Anguren</h2>
                <p data-aos="fade-up" data-aos-delay="800" className="text-[clamp(2rem,4.3vw,3rem)] leading-tight mt-1 mb-6 text-muted font-bold">Full Stack Developer</p>
                <p data-aos="fade-up" data-aos-delay="900" className="mb-8 max-w-2xl text-lg text-secondary leading-8">I design, develop, and manage web projects, ensuring functionality, usability, and meeting goals while staying current with new technologies.</p>
                <div data-aos="fade-up" data-aos-delay="1000" className="flex flex-wrap justify-start mt-10 gap-4 sm:mt-[3.5rem] sm:gap-8">
                    <a href="/files/Liz_CV.pdf" target="_blank" rel="noopener noreferrer" className="outline-action resume-action inline-flex h-12 w-full items-center justify-center rounded-xl border px-4 font-semibold sm:w-48">Resume</a>
                    <a href="#contact" className="outline-action contact-action inline-flex h-12 w-full items-center justify-center rounded-xl border px-4 font-semibold sm:w-48">Contact Me</a>
                </div>
            </div>

            <canvas id="particle-canvas" className="absolute bottom-0 left-0 h-4/5 w-full sm:h-5/6"></canvas>
            
        </section>


    );
  }
