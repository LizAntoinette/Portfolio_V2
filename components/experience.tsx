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
        <section id="experience" className="mt-20 flex-grow flex items-center min-h-screen py-28 z-20">
            <div className="flex m-auto w-4/5 max-w-6xl flex-col"  data-aos="fade-left">
                <div className='mb-12'>
                    <p className="section-heading text-[32px] mb-6 font-semibold w-full border-b-[1px] line-sub my-10 ">
                        <span className='section-title-fill pr-4'>
                            My <span className='title-name'>Experience</span></span></p>
                </div>
                <div className="flex flex-col lg:flex-row m-auto w-full items-start gap-6">
                    <div className="flex w-full overflow-x-auto lg:block lg:w-1/3 text-[17px] leading-snug">
                        <button
                            className={`experience-tab flex-none min-w-[11rem] lg:block lg:min-w-0 border-l-[1px] py-5 px-5 w-full text-left ${
                                activeTab === 'Coach Catalyst' && 'is-active font-semibold border-l-[2px]'
                                }`}
                            onClick={() => openCity('Coach Catalyst')}
                        >
                            Coach Catalyst
                        </button>
                        <button
                            className={`experience-tab flex-none min-w-[11rem] lg:block lg:min-w-0 border-l-[1px] py-5 px-5 w-full text-left ${
                                activeTab === 'Senarysoft LLC' && 'is-active font-semibold border-l-[2px]'
                                }`}
                            onClick={() => openCity('Senarysoft LLC')}
                        >
                            Senarysoft LLC
                        </button>
                        <button
                            className={`experience-tab flex-none min-w-[16rem] lg:block lg:min-w-0 border-l-[1px] py-5 px-5 w-full text-left ${
                                activeTab === 'Eastern Samar State University' && 'is-active font-semibold border-l-[2px]'
                                }`}
                            onClick={() => openCity('Eastern Samar State University')}
                        >
                            Eastern Samar State University
                        </button>
                        <button
                            className={`experience-tab flex-none min-w-[11rem] lg:block lg:min-w-0 border-l-[1px] py-5 px-5 w-full text-left ${
                                activeTab === 'WinterWinds' && 'is-active font-semibold border-l-[2px]'
                                }`}
                            onClick={() => openCity('WinterWinds')}
                        >
                            WinterWinds
                        </button>
                    </div>
                    <div className="w-full lg:w-2/3 min-h-[34rem] px-0 sm:px-5 text-primary">
                        <div
                            data-aos="fade-left"
                            data-aos-duration="900"
                            id="Coach_Catalyst"
                            className={`tabcontent ${
                                activeTab === 'Coach Catalyst' ? 'block' : 'hidden'
                                } py-4 px-1 sm:px-7`}
                        >
                            <p className='font-bold text-2xl leading-tight'>Full-Stack Developer<span className='company-color'> @ Coach Catalyst</span></p>
                            <p className='mt-2 mb-5 text-base font-semibold italic'>January 2023 – Present</p>

                            <ul className='list-disc pl-5 space-y-3 text-left text-base text-secondary leading-7'>
                                <li>Develop and maintain full-stack features for coaching, programs, workouts, nutrition, messaging, communities, and client resources.</li>
                                <li>Build and support health-data integrations with Fitbit, Oura, Withings, Terra, and Google Health.</li>
                                <li>Develop REST APIs, background jobs, and data-synchronization workflows.</li>
                                <li>Create responsive web and mobile interfaces using Vue.js and Tailwind CSS.</li>
                                <li>Optimize filtering, reporting, caching, and application performance.</li>
                                <li>Enhance stripe billing, subscription, email, and notification workflows.</li>
                                <li>Diagnose and resolve production issues involving integrations, permissions, and data reliability.</li>
                                <li>Add automated tests and API documentation to improve release quality.</li>
                            </ul>

                            <p className='mt-5 text-[15px] text-secondary leading-6'>
                                <span className='font-bold text-primary'>Technologies:</span> Ruby on Rails, Ruby, Vue.js, Tailwind CSS, PostgreSQL, Sidekiq, REST APIs
                            </p>

                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="900"
                            id="Senarysoft_LLC"
                            className={`tabcontent ${
                                activeTab === 'Senarysoft LLC' ? 'block' : 'hidden'
                            } py-6 px-1 sm:px-7`}
                        >
                            <p className='font-bold text-2xl leading-tight text-primary'>Software Engineer<span className='company-color'> @ Senarysoft LLC</span></p>
                            <p className='mt-2 mb-5 text-base font-semibold italic'>February 2022 – June 2023</p>

                            <ul className='list-disc pl-5 space-y-3 text-left text-base text-secondary leading-7'>
                                <li>Customized and maintained CRM and e-commerce platforms to support client-specific business workflows and requirements.</li>
                                <li>Developed and enhanced web applications using ASP.NET C#, PHP, JavaScript, AJAX, and MVC architecture.</li>
                                <li>Modernized a legacy ASP.NET C# application and its development environment from Visual Studio 2012 to Visual Studio 2019, improving compatibility and maintainability.</li>
                                <li>Developed and supported a POS-style hybrid mobile application using Apache Cordova, delivering a responsive and consistent experience across mobile devices.</li>
                                <li>Investigated and resolved defects across legacy and active codebases, improving application reliability, performance, and usability.</li>
                                <li>Contributed to code reviews, quality assurance, and security-focused implementation to strengthen release quality and team collaboration.</li>
                            </ul>

                            <p className='mt-5 text-[15px] text-secondary leading-6'>
                                <span className='font-bold text-primary'>Technologies:</span> ASP.NET, C#, PHP, JavaScript, AJAX, MVC, Apache Cordova
                            </p>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="900"
                            id="essu"
                            className={`tabcontent ${
                                activeTab === 'Eastern Samar State University' ? 'block' : 'hidden'
                            } py-6 px-1 sm:px-7`}
                        >
                            <p className='font-bold text-2xl leading-tight text-primary'>Computer Science Lecturer<br /><span className='company-color'> @ Eastern Samar State University</span></p>
                            <p className='mt-2 mb-5 text-base font-semibold italic'>August 2019 – December 2021</p>

                            <ul className='list-disc pl-5 space-y-3 text-left text-base text-secondary leading-7'>
                                <li>Taught Object-Oriented Programming, primarily using Java and C#, and introduced fundamental data structures to CS and IT students.</li>
                                <li>Prepared and delivered lesson plans, lectures, assessments, and programming exercises aligned with course objectives.</li>
                                <li>Created a Java OOP learning module and hands-on exercises for modular classes during the COVID-19 pandemic.</li>
                                <li>Managed student records, grades, and academic performance tracking.</li>
                                <li>Contributed to the development of a university enrollment system using Laravel and Vue.js.</li>
                                <li>Participated in faculty meetings, academic planning, and teaching coordination.</li>
                            </ul>

                            <p className='mt-5 text-[15px] text-secondary leading-6'>
                                <span className='font-bold text-primary'>Technologies:</span> Java, C#, OOP, Data Structures, Laravel, Vue.js
                            </p>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="900"
                            id="WinterWind"
                            className={`tabcontent ${
                                activeTab === 'WinterWinds' ? 'block' : 'hidden'
                            } py-6 px-1 sm:px-7`}
                        >
                            <p className='font-bold text-2xl leading-tight text-primary'>Junior Web Developer<span className='company-color'> @ WinterWind</span></p>
                            <p className='mt-2 mb-5 text-base font-semibold italic'>May 2018 – December 2018</p>

                            <ul className='list-disc pl-5 space-y-3 text-left text-base text-secondary leading-7'>
                                <li>Supported the development of Coinflyer.com, a cryptocurrency trading platform, as part of the team responsible for its web interfaces.</li>
                                <li>Built and styled responsive interface components using HTML, CSS, Sass, Tailwind CSS, and Vue.js.</li>
                                <li>Completed hands-on training while applying PHP, JavaScript, and MySQL to assigned development tasks.</li>
                                <li>Tested and troubleshot changes before deployment, helping identify and resolve UI and functional issues.</li>
                                <li>Coordinated translation work, researched frontend technologies, and assisted the development team during staffing gaps.</li>
                            </ul>

                            <p className='mt-5 text-[15px] text-secondary leading-6'>
                                <span className='font-bold text-primary'>Technologies:</span> HTML, CSS, Sass, Tailwind CSS, Vue.js, JavaScript, PHP, MySQL
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
