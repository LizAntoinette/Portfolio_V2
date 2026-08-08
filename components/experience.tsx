"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import SectionHeading from "./section_heading";

const employers = [
    { name: "Coach Catalyst", compactName: "Coach Catalyst", panelId: "coach-catalyst" },
    { name: "Senarysoft LLC", compactName: "Senarysoft", panelId: "senarysoft" },
    {
        name: "Eastern Samar State University",
        compactName: "ESSU",
        panelId: "eastern-samar-state-university",
    },
    { name: "WinterWinds", compactName: "WinterWind", panelId: "winterwind" },
] as const;

type EmployerName = (typeof employers)[number]["name"];


export default function Experience() {
    const [activeTab, setActiveTab] = useState<EmployerName>("Coach Catalyst");

    useEffect(() => {
        AOS.refresh();
    }, [activeTab]);
    

    const openCity = (tabName: EmployerName) => {
        setActiveTab(tabName);
    };

    const handleTabKeyDown = (
        event: React.KeyboardEvent<HTMLButtonElement>,
        currentIndex: number,
        group: "mobile" | "desktop",
    ) => {
        let nextIndex = currentIndex;

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            nextIndex = (currentIndex + 1) % employers.length;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            nextIndex = (currentIndex - 1 + employers.length) % employers.length;
        } else if (event.key === "Home") {
            nextIndex = 0;
        } else if (event.key === "End") {
            nextIndex = employers.length - 1;
        } else {
            return;
        }

        event.preventDefault();
        const nextEmployer = employers[nextIndex];
        openCity(nextEmployer.name);
        document.getElementById(`${group}-tab-${nextEmployer.panelId}`)?.focus();
    };


    return (
        <section id="experience" className="mt-12 flex min-h-screen flex-grow items-center py-20 sm:mt-16 sm:py-24 lg:mt-20 lg:py-28 z-20">
            <div className="m-auto flex w-[calc(100%_-_2rem)] max-w-6xl flex-col sm:w-4/5" data-aos="fade-left">
                <SectionHeading className="mb-12">
                    My <span className="title-name">Experience</span>
                </SectionHeading>
                <div className="m-auto flex w-full flex-col items-start gap-6 lg:flex-row">
                    <div
                        className="experience-mobile-tabs grid w-full lg:hidden"
                        role="tablist"
                        aria-label="Select a company"
                    >
                        {employers.map((employer, index) => (
                            <button
                                key={employer.name}
                                id={`mobile-tab-${employer.panelId}`}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === employer.name}
                                aria-controls={`experience-panel-${employer.panelId}`}
                                tabIndex={activeTab === employer.name ? 0 : -1}
                                className={`experience-mobile-tab ${
                                    activeTab === employer.name ? "is-active" : ""
                                }`}
                                onClick={() => openCity(employer.name)}
                                onKeyDown={(event) => handleTabKeyDown(event, index, "mobile")}
                            >
                                {employer.compactName}
                            </button>
                        ))}
                    </div>

                    <div
                        className="experience-tabs hidden text-[17px] leading-snug lg:block lg:w-1/3"
                        role="tablist"
                        aria-label="Select a company"
                    >
                        {employers.map((employer, index) => (
                            <button
                                key={employer.name}
                                id={`desktop-tab-${employer.panelId}`}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === employer.name}
                                aria-controls={`experience-panel-${employer.panelId}`}
                                tabIndex={activeTab === employer.name ? 0 : -1}
                                className={`experience-tab block w-full border-l-[1px] px-5 py-5 text-left ${
                                    activeTab === employer.name
                                        ? "is-active border-l-[2px] font-semibold"
                                        : ""
                                }`}
                                onClick={() => openCity(employer.name)}
                                onKeyDown={(event) => handleTabKeyDown(event, index, "desktop")}
                            >
                                {employer.name}
                            </button>
                        ))}
                    </div>
                    <div className="w-full min-h-0 px-0 text-primary sm:px-5 lg:min-h-[34rem] lg:w-2/3">
                        <div
                            data-aos="fade-left"
                            data-aos-duration="900"
                            id="experience-panel-coach-catalyst"
                            role="tabpanel"
                            aria-label="Coach Catalyst experience"
                            tabIndex={0}
                            className={`tabcontent ${
                                activeTab === 'Coach Catalyst' ? 'block' : 'hidden'
                                } py-4 px-1 sm:px-7`}
                        >
                            <p className='font-bold text-xl sm:text-2xl leading-tight'>Full-Stack Developer<span className='company-color mt-1 block sm:mt-0 sm:inline'> @ Coach Catalyst</span></p>
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
                            id="experience-panel-senarysoft"
                            role="tabpanel"
                            aria-label="Senarysoft experience"
                            tabIndex={0}
                            className={`tabcontent ${
                                activeTab === 'Senarysoft LLC' ? 'block' : 'hidden'
                            } py-6 px-1 sm:px-7`}
                        >
                            <p className='font-bold text-xl sm:text-2xl leading-tight text-primary'>Software Engineer<span className='company-color mt-1 block sm:mt-0 sm:inline'> @ Senarysoft LLC</span></p>
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
                            id="experience-panel-eastern-samar-state-university"
                            role="tabpanel"
                            aria-label="Eastern Samar State University experience"
                            tabIndex={0}
                            className={`tabcontent ${
                                activeTab === 'Eastern Samar State University' ? 'block' : 'hidden'
                            } py-6 px-1 sm:px-7`}
                        >
                            <p className='font-bold text-xl sm:text-2xl leading-tight text-primary'>Computer Science Lecturer<span className='company-color mt-1 block'> @ Eastern Samar State University</span></p>
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
                            id="experience-panel-winterwind"
                            role="tabpanel"
                            aria-label="WinterWind experience"
                            tabIndex={0}
                            className={`tabcontent ${
                                activeTab === 'WinterWinds' ? 'block' : 'hidden'
                            } py-6 px-1 sm:px-7`}
                        >
                            <p className='font-bold text-xl sm:text-2xl leading-tight text-primary'>Junior Web Developer<span className='company-color mt-1 block sm:mt-0 sm:inline'> @ WinterWind</span></p>
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
