'use client'
import './styles/header.css'

export default function Header() {
  return (
    <header className="header bg-white flex flex-row justify-evenly items-center h-[9vh]">
      <h1 className="text-[26px] font-[700]">
        DWS
      </h1>
      <nav className="flex flex-row justify-center items-center text-[14px] gap-6 tracking-widest pr-[3%]">

        <a className="hover:text-blue-600 transition-transform hover:scale-[102%] duration-75" href="#">Home</a>
        <a className="hover:text-blue-600 transition-transform hover:scale-[102%] duration-75" href="#">About</a>
        <a className="hover:text-blue-600 transition-transform hover:scale-[102%] duration-75" href="#">Services</a>
        <a className="hover:text-blue-600 transition-transform hover:scale-[102%] duration-75" href="#">Pricing</a>

        {/* <div className="group relative">
          <a className="hover:text-blue-600" href="#">Megamenu</a>
          <div className="group-hover:visible flex absolute top-[25px] invisible flex-col justify-center items-start text-nowrap bg-gray-400 p-2 gap-2 z-10">
            <a href="#">Content Writing</a>
            <a href="#">Web Development</a>
            <a href="#">Marketing</a>
            <a href="#">UI UX</a>
          </div>
        </div> */}

        <a className="hover:text-blue-600 transition-transform hover:scale-[102%] duration-75" href="#">Blog</a>
        <a className="hover:text-blue-600 transition-transform hover:scale-[102%] duration-75" href="#">Contact</a>
        <button className="w-[90px] h-[30px] rounded-full bg-blue-600 hover:bg-orange-500 transition-transform duration-300 text-white hover:scale-[105%]">Try free</button>
      </nav>
    </header>
  )
}