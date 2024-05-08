import bg from "../../assets/images/bg.png"

const Header = () => {
  return (
    <div className="w-full md:h-[110vh] h-screen bg-cover relative bg-center md:px-[80px] px-8 py-[30px]" 
      style={{backgroundImage:`url(${bg})`}}>
        <div className="w-full flex items-center justify-between">
          <span className="text-white font-bold text-[68px] cursor-pointer">Muebles</span>
          <nav className="hidden md:flex items-center gap-[62px]">
            <a href="/" 
              className="text-white no-underline font-medium text-[18px] transition-all duration-300
              hover:text-[#35E644]">
              Furniture
            </a>
            <a href="/" 
              className="text-white no-underline font-medium text-[18px] transition-all duration-300
              hover:text-[#35E644]">
              Shop
            </a>
            <a href="/" 
              className="text-white no-underline font-medium text-[18px] transition-all duration-300
              hover:text-[#35E644]">
              About
            </a>
            <a href="/" 
              className="text-white no-underline font-medium text-[18px] transition-all duration-300
              hover:text-[#35E644]">
              Contact
            </a>
          </nav>
        </div>

    </div>
  )
}

export default Header
