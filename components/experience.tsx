"use client";
import React, { useState,  useEffect } from 'react';
import AOS from 'aos';


export default function Experience() {
    const [activeTab, setActiveTab] = useState<string>('Coach Catalyst'); // Specify type as string

    useEffect(() => {
        
        AOS.refresh();
    }, [activeTab]);
    

    const openCity = (tabName: string) => { // Specify type of tabName
        setActiveTab(tabName);
    };


    return (
        <section id="experience" className="mt-20 flex-grow flex items-center h-[100vh] z-20">
            <div className="flex m-auto w-3/5 flex-col"  data-aos="fade-left">
                <div className='mb-12'>
                    <p className="text-[30px] mb-6 font-semibold w-full border-b-[1px] border-[#797593ba] line-sub my-10 ">
                        <span className='bg-[#191724] pr-4'>
                            My <span className='title-name'>Experience</span></span></p>
                </div>
                <div className="flex m-auto w-100">
                    <div className="w-1/3 h-96 text-base">
                        <button
                            className={`block border-l-[1px] border-[#797593ba] hover:bg-[#272533] focus:bg-[#272533] py-6 px-5 w-full text-left ${
                                activeTab === 'Coach Catalyst' && 'bg-[#272533] font-semibold border-l-[2px] text-[#EA9D34] border-[#EA9D34]' 
                                }`}
                            onClick={() => openCity('Coach Catalyst')}
                        >
                            Coach Catalyst
                        </button>
                        <button
                            className={`block border-l-[1px] border-[#797593ba] hover:bg-[#272533] focus:bg-[#272533] py-6 px-5 w-full text-left ${
                                activeTab === 'Senarysoft LLC' && 'bg-[#272533] font-semibold border-l-[2px] text-[#EA9D34] border-[#EA9D34]'
                                }`}
                            onClick={() => openCity('Senarysoft LLC')}
                        >
                            Senarysoft LLC
                        </button>
                        <button
                            className={`block border-l-[1px] border-[#797593ba] hover:bg-[#272533] focus:bg-[#272533] py-6 px-5 w-full text-left ${
                                activeTab === 'Eastern Samar State University' && 'bg-[#272533] font-semibold border-l-[2px] text-[#EA9D34] border-[#EA9D34]' 
                                }`}
                            onClick={() => openCity('Eastern Samar State University')}
                        >
                            Eastern Samar State University
                        </button>
                        <button
                            className={`block border-l-[1px] border-[#797593ba] hover:bg-[#272533] focus:bg-[#272533] py-6 px-5 w-full text-left ${
                                activeTab === 'WinterWinds' && 'bg-[#272533] font-semibold border-l-[2px] text-[#EA9D34] border-[#EA9D34]'
                                }`}
                            onClick={() => openCity('WinterWinds')}
                        >
                            WinterWinds
                        </button>
                    </div>
                    <div className="w-2/3 h-96 px-5 text-[#e0def4]">
                        <div
                            data-aos="fade-left"
                            data-aos-duration="900"
                            id="Coach_Catalyst"
                            className={`tabcontent ${
                                activeTab === 'Coach Catalyst' ? 'block' : 'hidden'
                                } py-6 px-7`}
                        >
                            <p className='font-bold text-xl'>Full Stack Developer<span className='company-color'> @ Coach Catalyst</span></p>
                            <p className='mt-2 mb-6 text-sm '>Jan 2023 - Present</p>
                            
                            <ul className='list-disc pl-4 space-y-4 text-justify text-sm text-[#908caa] leading-relaxed'>
                                <li>Developed additional features for Coach Catalyst Website using Ruby on Rails.</li>
                                <li>Proficient in Ruby programming language, adept at Object-Oriented Programming (OOP) concepts.</li>
                                <li>Applied Tailwind CSS and Vue.js for improved user interfaces, alongsidePostgreSQL for datasm management, and contributed to understanding of RESTful web services and APIs in modern web development.</li>
                            </ul>  

                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="900"
                            id="Senarysoft_LLC"
                            className={`tabcontent ${
                                activeTab === 'Senarysoft LLC' ? 'block' : 'hidden'
                                } py-6 px-7`}
                        >
                            <p className='font-bold text-xl'>Software Engineer<span className='company-color'> @ Senarysoft LLC</span></p>
                            <p className='mt-2 mb-6 text-sm'>Feb 2022 - June 2023</p>
                            
                            <ul className='list-disc pl-4 space-y-4 text-justify text-sm  text-[#908caa]'>
                                <li>Collaborated in a developer team, delivering two projects: an ASP.NET C# website and a hybrid mobile web application.</li>
                                <li>Engineered accessible, responsive user interfaces for consistent user experience across device</li>
                                <li>Identified and resolved bugs, enhancing web functionality and speed. Conducted code reviews to improve overall code quality and team collaboration. Implemented security best practices for robustness and integrity against vulnerabilities.</li>
                            </ul>  
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="900"
                            id="essu"
                            className={`tabcontent ${
                                activeTab === 'Eastern Samar State University' ? 'block' : 'hidden'
                            } py-6 px-7`}
                        >
                            <p className='font-bold text-xl'>Computer Science Lecturer<br></br><span className='company-color'> @ Eastern Samar State University</span></p>
                            <p className='mt-2 mb-6 text-sm'>Aug 2019 – Dec 2021</p>
                            
                            
                            <ul className='list-disc pl-4 space-y-4 text-justify text-sm  text-[#908caa]'>
                                <li>Designed and executed curriculum for CS and IT students, incorporating current technology.</li>
                                <li>Managed student records and academic performance metrics</li>
                                <li>Developed and implemented instructional plans aligned with course objectives, alongside creating website projects for school use.</li>
                            </ul>  
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="900"
                            id="WinterWind"
                            className={`tabcontent ${
                                activeTab === 'WinterWinds' ? 'block' : 'hidden'
                            } py-6 px-7`}
                        >
                            <p className='font-bold text-xl'>Junior Web Developer<span className='company-color'> @ WinterWind</span></p>
                            <p className='mt-2 mb-6 text-sm'>May 2018 – Dec 2018</p>
                            
                            <ul className='list-disc pl-4 space-y-4 text-justify text-sm  text-[#908caa]'>
                                <li>Contributed to building Coinflyer.com, a cryptocurrency trading site, focusing on website interfaces with HTML and CSS.</li>
                                <li>Utilized PHP, MySQL, and JavaScript for programming requirements, conducted testing and troubleshooting pre-deployment.</li>
                                <li>Managed translation team, assisted developers during understaffed periods, and conducted research on new technologies for website projects.</li>
                            </ul>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


