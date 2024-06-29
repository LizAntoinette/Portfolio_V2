"use client";

import Image from "next/image";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Header from "@/components/header";
import Home from "@/components/home";
import Experience from "@/components/experience"
import Project from "@/components/project"
import Contact from "@/components/contact"
import Footer from "@/components/footer";




export default function Main() {
      useEffect(() => {
        AOS.init({
          once: true,
          duration: 1200
        });
      }, [])

  return (
    <main className="flex flex-col min-h-screen">
      
      <Header></Header>
      <Home></Home>
      <Experience></Experience>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
   
  </main>

   
  );
}
