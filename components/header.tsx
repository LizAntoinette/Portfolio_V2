// components/Header.tsx

import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");
 
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section");
      const navHeight = document.getElementById("header")?.offsetHeight || 0;

      sections.forEach((section) => {
        const top = section.offsetTop - navHeight;
        const bottom = top + section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= top && scrollPosition < bottom) {
          const id = section.id;
          setActiveSection(id); // Update active section state
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header id="header" className="fixed top-0 left-0 w-full z-50 header-glass">
      <a className="absolute top-0 left-5 h-full" id="logo" href="#">
        <img src="assets/logo2.png" className="h-full" alt="" />
      </a>
      <nav id="nav" className="absolute right-8 top-3">
        <ul className="flex mt-6">
          <li className="ml-8 mr-8 hover:text-[#31748f]">
            <a href="#home" onClick={() => setActiveSection('home')} className={`inline-block h-full align-middle no-underline border-0 outline-none nav-link ${activeSection === "home" ? "text-[#31748f] font-bold" : ""}`}>
              Home
            </a>
          </li>
          <li className="ml-8 mr-8 hover:text-[#31748f]">
            <a href="#experience" onClick={() => setActiveSection('experience')} className={`inline-block h-full align-middle no-underline border-0 outline-none nav-link ${activeSection === "experience" ? "text-[#31748f] font-bold" : ""}`}>
              Experience
            </a>
          </li>
          <li className="ml-8 mr-8 hover:text-[#31748f]">
            <a href="#project" onClick={() => setActiveSection('project')} className={`inline-block h-full align-middle no-underline border-0 outline-none nav-link ${activeSection === "project" ? "text-[#31748f] font-bold" : ""}`}>
              Projects
            </a>
          </li>
          <li className="ml-8 mr-8 hover:text-[#31748f]">
            <a href="#contact" onClick={() => setActiveSection('contact')} className={`inline-block h-full align-middle no-underline border-0 outline-none nav-link ${activeSection === "contact" ? "text-[#31748f] font-bold" : ""}`}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
