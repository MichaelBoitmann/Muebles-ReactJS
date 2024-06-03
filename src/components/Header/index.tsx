import bg from "../../assets/images/sofa3.png";
import bag from "../../assets/images/bag.png";

const Header = () => {
  return (
    <div className="w-full md:h-[100vh] h-screen bg-cover relative bg-center md:px-[80px] px-8 py-[40px]" 
          style={{backgroundImage:`url(${bg})`}}>
      <div className="w-full flex items-center justify-between">
        <span className="text-white font-bold text-[28px] cursor-pointer">Muebles</span>
        <div className="hidden md:flex items-center object-right gap-[62px]">
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
        </div>
        <img src={bag} alt="cart" className="text-white cursor-pointer w-[25px]" />
      </div>
      <div className="w-full flex flex-col gap-5 items-center justify-center md:mt-[100px] mt-5">
        <div className="text-center font-bold md:text-[70px] text-yellow-700
        text-[40px] md:max-w-[900px] leading-[90px]">
          Make Your Interior More Minimalistic & Modern
        </div>
        <p className="text-white md:text-[24px] text-[18px] font-[200] max-[300] text-center mt-[60px]">
          Turn your room with Muebles into a lot more < br />minimalist and modern with ease and speed.
        </p>
      </div>
      <div className="w-[100%] mb-[0px]  h-[80px] bg-gradient-to-t from-white to-transparent abolute left-0 mt-[42%]"></div>
    </div>
  );
};

export default Header
