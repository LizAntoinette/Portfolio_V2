
export default function Home() {
    return (
        <section id="home" className="mt-15 flex-grow flex items-center h-screen  z-20">
            <div className="ml-52 -mt-10 w-1/2">
                <h1 className="text-2xl mb-2">Hi, my name is</h1>
                <h2 className="text-[55px] font-bold text-name">Liz Antoinette Anguren</h2>
                <p className="text-[40px] mb-4 font-semibold">Full Stack Developer</p>
                <p className="mb-8">I design, develop, and manage web projects, ensuring functionality, usability, and adherence to objectives while staying updated with emerging technologies.</p>
                <div className="flex justify-start space-x-4">
                    <a href="#resume" className="inline-flex items-center justify-center w-48 h-12 rounded-xl font-semibold bg-transparent border border-[#56949F] text-[#9CCFD8] px-4 hover:bg-[#9CCFD8] hover:text-[#191724] transition-colors duration-300 ease-in-out">Resume</a>
                    <a href="#contact" className="inline-flex items-center justify-center w-48 h-12 rounded-xl font-semibold bg-transparent border border-[#B4637A] text-[#EBBCBA] px-4 hover:bg-[#EBBCBA] hover:text-[#191724] transition-colors duration-300 ease-in-out">Contact Me</a>
                </div>
            </div>
        </section>


    );
  }
  