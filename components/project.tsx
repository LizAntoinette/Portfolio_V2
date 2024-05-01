import Image from "next/image";


export default function Project() {
    return (
        <section id="project" className="mt-15 flex-grow flex h-[100vh] z-20">
            <div className="flex mx-auto w-3/4 flex-col mt-32">
                <div className='mb-7'>
                    <p className="text-[30px] mb-6 font-semibold w-full border-b-[1px] border-white line-sub my-10 ">
                        <span className='bg-[#191724] pr-3'>
                            My <span className='title-name'>Personal Projects</span>
                        </span>
                    </p>
                </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
                <div className="mt-10">
                    <Image src="/images/img_web.png" alt="Halcyon Theme" width={750}  height={650}/>
                </div>

            
                <div className="flex-1 flex flex-col items-start justify-center p-12 text-white space-y-6">
                    <h1 className="text-4xl font-bold">Halcyon</h1>
                    <p className="text-xl">A minimal, dark blue theme for VS Code, Sublime Text, Atom, and more.</p>
                    <p>Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    <div className="flex space-x-4">
                    <button className="bg-blue-700 px-4 py-2 rounded">VS Code</button>
                    <button className="bg-blue-700 px-4 py-2 rounded">Sublime Text</button>
                    <button className="bg-blue-700 px-4 py-2 rounded">Atom</button>
                    </div>
            
                </div>
                {/* <div className="bg-gray-800 rounded-lg p-5">
                    <img className="w-full h-40 object-cover rounded-md mb-3" src=""/>
                    <h3 className="text-xl font-semibold mb-2">Budget Tracker</h3>
                    <p className="text-gray-400 mb-3">A simple budget tracker that manages your finance using Java Spring Boot framework, Typescript, Tailwindcss and React.js</p>
                    <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-700 text-xs text-white font-bold px-2 py-1 rounded">HTML</span>
                    <span className="bg-gray-700 text-xs text-white font-bold px-2 py-1 rounded">Java</span>
                    <span className="bg-gray-700 text-xs text-white font-bold px-2 py-1 rounded">CSS</span>
                    <span className="bg-gray-700 text-xs text-white font-bold px-2 py-1 rounded">JavaScript</span>
                    </div>
                </div>
                
                
                <div className="bg-gray-800 rounded-lg p-5">
                    <img className="w-full h-40 object-cover rounded-md mb-3" src=""/>
                    <h3 className="text-xl font-semibold mb-2">Simple E-Commerce Platform</h3>
                    <p className="text-gray-400 mb-3">A simple budget tracker that manages your finance using C# ASP.NET Core, Typescript, Bootstrap, SASS and AngularJS</p>
                    <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-700 text-xs text-white font-bold px-2 py-1 rounded">HTML</span>
                    <span className="bg-gray-700 text-xs text-white font-bold px-2 py-1 rounded">Java</span>
                    <span className="bg-gray-700 text-xs text-white font-bold px-2 py-1 rounded">CSS</span>
                    <span className="bg-gray-700 text-xs text-white font-bold px-2 py-1 rounded">JavaScript</span>
                    </div>
                </div> */}
            </div>
            </div>
        </section>


    );
  }
  