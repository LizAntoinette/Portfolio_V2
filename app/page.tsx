"use client";

import Image from "next/image";
import Header from "@/components/header";
import Home from "@/components/home";
import Experience from "@/components/experience"
import Project from "@/components/project"
import Contact from "@/components/contact"
import Footer from "@/components/footer";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if y
import { optionsParticles } from "@/components/optionsParticles";

export default function Main() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  return (
    <main className="flex flex-col min-h-screen">
      
      <Header></Header>
      <Home></Home>
      <Experience></Experience>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
  
      {/* <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={optionsParticles}
      /> */}
    
   
  </main>

   
  );
}
