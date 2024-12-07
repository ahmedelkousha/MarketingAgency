
export default function Header() {
  return (
    <header className="bg-white flex flex-row justify-center items-center">
      <h1 className="text-[26px] font-[700]">
        DWS
      </h1>
      <nav className="flex flex-row justify-center items-center text-[14px]">

        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Pricing</a>

        <div>
          <a href="#">Megamenu</a>
          <div className="hidden">
            <a href="#">Content Writing</a>
            <a href="#">Web Development</a>
            <a href="#">Marketing</a>
            <a href="#">UI UX</a>
          </div>
        </div>

        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <button>Try free</button>
      </nav>
    </header>
  )
}