import Image from "next/image";

export default function Header() {
  return (
    <header id="header" className="fixed top-0 left-0 w-full z-50">
        <a className="absolute top-0 left-5 h-full" id="logo" href="#">
            <img src="assets/logo2.png" className="h-full" alt="" />
        </a>
        <nav id="nav" className="absolute right-8 top-3">
            <ul className="flex mt-6">
                <li className="ml-8 mr-8 hover:text-[#9CCFD8]"><a href="#home" className="inline-block  h-full align-middle no-underline border-0 outline-none nav-link active">Home</a></li>
                <li className="ml-8 mr-8 hover:text-[#9CCFD8]"><a href="#experience" className="inline-block h-full align-middle no-underline border-0 outline-none nav-link">Experience</a></li>
                <li className="ml-8 mr-8 hover:text-[#9CCFD8]"><a href="#project" className="inline-block h-full align-middle no-underline border-0 outline-none nav-link">Projects</a></li>
                <li className="ml-8 mr-8 hover:text-[#9CCFD8]"><a href="#contact" className="inline-block h-full align-middle no-underline border-0 outline-none nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
}
