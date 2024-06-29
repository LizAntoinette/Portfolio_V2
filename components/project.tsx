import React from 'react';
import Image from "next/image";

export default function Project() {
    return (
        <section id="project" className="mt-15 flex-grow flex h-[120rem] z-20">
            <div className="flex mx-auto w-3/4 flex-col mt-32">
                <div className='mb-7'  data-aos="fade-up">
                    <p className="text-[30px] mb-6 font-semibold w-full border-b-[1px] border-[#797593ba] line-sub my-10 ">
                        
                        <span className='bg-[#0C0C0DFF] pr-3'>
                            My <span className='title-name'>Personal Projects</span>
                        </span>
                    </p>
                </div>
            
                <div  data-aos="fade-left"  className="flex flex-col md:flex-row gap-10 my-10">
        
                    <div className="mt-10 flex-col ">
                        <Image src="/images/img_web.png" className="max-w-[650px]" alt="Halcyon Theme" width={650} height={650}/>
                    </div>

                    <div className=" flex flex-col py-12 text-white text-right justify-end">
                        <h1 className="text-3xl font-bold mb-2">Budget Tracker</h1>
                        <p className="text-lg pb-6 company-color">Spring boot + ReactJS</p>
                        <div className="max-w-[700px] -ml-[330px] bg-[#272533] px-6 py-5 mb-6 rounded-2xl" >
                            <p className="text-sm leading-7 text-[#908caa]">A simple budget tracker that manages  your finance using  Java Spring Boot 
                            framework, Typescript, Tailwindcss and React.js</p>  
                        </div>
                        
                        <div className="flex space-x-4  justify-end">
                            <p className="text-white px-1 text-xs py-2">Html</p>
                            <p className="text-white px-1 text-xs py-2">Java</p>
                            <p className="text-white px-1 text-xs py-2">ReactJS</p>
                            <p className="text-white px-1 text-xs py-2">Javacript</p>
                            <p className="text-white px-1 text-xs py-2">Tailwinds</p>
                        </div>
                        <div className=" flex m-3 justify-end">
                            <a href="https://github.com/LizAntoinette" className="text-gray-400 hover:text-gray-300 mx-2">
                             
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 0C4.70138 0 0 4.77499 0 10.6644C0 15.6616 3.388 19.8429 7.9555 21C7.9065 20.856 7.875 20.689 7.875 20.4819V18.6592C7.44888 18.6592 6.73487 18.6592 6.5555 18.6592C5.83712 18.6592 5.19837 18.3454 4.88862 17.7625C4.54475 17.1146 4.48525 16.1237 3.633 15.5176C3.38013 15.3159 3.57262 15.0857 3.864 15.1168C4.40212 15.2714 4.84837 15.6465 5.26837 16.2028C5.68663 16.76 5.8835 16.8862 6.66487 16.8862C7.04375 16.8862 7.61075 16.864 8.1445 16.7787C8.4315 16.0384 8.92762 15.3567 9.534 15.035C6.0375 14.6698 4.36888 12.903 4.36888 10.5044C4.36888 9.47177 4.802 8.47287 5.53788 7.63127C5.29638 6.7959 4.99275 5.09226 5.63063 4.4435C7.20388 4.4435 8.155 5.47973 8.38338 5.75967C9.16738 5.48684 10.0284 5.3322 10.9331 5.3322C11.8396 5.3322 12.7041 5.48684 13.4899 5.76145C13.7156 5.48328 14.6676 4.4435 16.2444 4.4435C16.8849 5.09314 16.5777 6.80389 16.3336 7.63749C17.0651 8.47732 17.4956 9.47355 17.4956 10.5044C17.4956 12.9013 15.8296 14.6671 12.3384 15.0342C13.2991 15.5434 14 16.9742 14 18.0522V20.4819C14 20.5743 13.9799 20.641 13.9694 20.7201C18.0609 19.2635 21 15.3176 21 10.6644C21 4.77499 16.2986 0 10.5 0Z" fill="white"/>
                                </svg>
                            </a>

                        </div>
                    </div>
                    
                
                </div>
                <div  data-aos="fade-right"  className="flex flex-col md:flex-row gap-10 my-[6rem]">
                    <div className=" flex flex-col py-12 text-white justify-start">
                        <h1 className="text-3xl font-bold mb-2">Simple E-Commerce Platform</h1>
                        <p className="text-lg pb-6 company-color">ASP.NET CORE + Angular</p>
                        <div className="max-w-[700px] -mr-[330px] bg-[#272533] px-6 py-5 mb-6 rounded-2xl z-30" >
                            <p className="text-sm leading-7 text-[#908caa]">A simple budget tracker that manages  your  finance using  C# ASP.NET Core, Typescript, Bootstrap, SASS and AngularJS</p>  
                        </div>
                        
                        <div className="flex space-x-4  justify-start">
                            <p className="text-white px-1 text-xs py-2">Html</p>
                            <p className="text-white px-1 text-xs py-2">Java</p>
                            <p className="text-white px-1 text-xs py-2">ReactJS</p>
                            <p className="text-white px-1 text-xs py-2">Javacript</p>
                            <p className="text-white px-1 text-xs py-2">Tailwinds</p>
                        </div>
                    </div>
                    <div className="flex-col ">
                        <Image src="/images/img_web.png" className="max-w-[650px]" alt="Halcyon Theme" width={650} height={650}/>
                    </div>

                
                </div> 
                <div  data-aos="fade-left"  className="flex flex-col md:flex-row gap-10 my-10">
    
                    <div className="mt-10 flex-col ">
                        <Image src="/images/img_web.png" className="max-w-[650px]" alt="Halcyon Theme" width={650} height={650}/>
                    </div>

                    <div className=" flex flex-col py-12 text-white text-right justify-end mb-10">
                        <h1 className="text-3xl font-bold mb-2">Blog Website</h1>
                        <p className="text-lg pb-6 company-color">Django + NextJS</p>
                        <div className="max-w-[700px] -ml-[330px] bg-[#272533] px-6 py-5 mb-6 rounded-2xl" >
                            <p className="text-sm leading-7 text-[#908caa]"> A simple budget tracker that manages  yourfinance using  Java Spring Boot framework, Typescript, Tailwindcss and React.js </p>  
                        </div>
                        
                    <div className="flex space-x-4  justify-end">
                            <p className="text-white px-1 text-xs py-2">Html</p>
                            <p className="text-white px-1 text-xs py-2">Java</p>
                            <p className="text-white px-1 text-xs py-2">ReactJS</p>
                            <p className="text-white px-1 text-xs py-2">Javacript</p>
                            <p className="text-white px-1 text-xs py-2">Tailwinds</p>
                        </div>
                    </div>
                
                </div>
            </div>
        </section>


    );
  }
  