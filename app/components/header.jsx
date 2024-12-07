
export default function Header() {
  return (
    <header className="bg-white flex flex-row justify-evenly items-center h-20">
      <h1 className="text-[26px] font-[700]">
        DWS
      </h1>
      <nav className="flex flex-row justify-center items-center text-[14px] gap-6 tracking-widest">

        <a className="hover:text-blue-600" href="#">Home</a>
        <a className="hover:text-blue-600" href="#">About</a>
        <a className="hover:text-blue-600" href="#">Services</a>
        <a className="hover:text-blue-600" href="#">Pricing</a>

        <div className="group relative min-w-[20px]">
          <a className="hover:text-blue-600" href="#">Megamenu</a>
          <div className="group-hover:visible flex absolute top-[25px] invisible flex-col justify-center items-start text-nowrap bg-gray-400 p-2 gap-2">
            <a href="#">Content Writing</a>
            <a href="#">Web Development</a>
            <a href="#">Marketing</a>
            <a href="#">UI UX</a>
          </div>
        </div>

        <a className="hover:text-blue-600" href="#">Blog</a>
        <a className="hover:text-blue-600" href="#">Contact</a>
        <button className="w-[90px] h-[30px] rounded-full bg-blue-600 hover:bg-orange-500 transition duration-200 text-white">Try free</button>
      </nav>
    </header>
  )
}