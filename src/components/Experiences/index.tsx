
import arrow from "../../assets/images/arrow.png";
import experiences from "../../assets/images/sofa1.75.png";

const Experiences = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-center md:gap-48 gap-20 mt-[240px] mb-[120px]">
      <div className="relative">
        <div className="absolute bg-[#f7f7f7] rounded-tr-[20px] left-0 top-[-66px] w-[450px] h-[300px] z-[-1]"></div>
        <img 
          src={experiences} 
          alt="experiences"
        />
        <div className="absolute bg-[#f7f7f7] rounded-[20px] right-0 top-[45%] -translate-y-1/2 translate-x-[50px] w-[450px] h-[300px] z-[-1]"></div>
      </div>
      <div className="flex flex-col mt-[-60px] md:px-0 px-8">
        <span className="font-medium text-[#e58411] text-[18px] tracking-[0.2em]">
          Experiences
        </span>
        <div className="font-bold text-[#1e1e1e] text-[42px] max-w-[450px] leading-[50px] mt-5">
          We Provide You The Best Experience
        </div>
        <p className="mt-5 max-w-[500px]">
          You don't have to worry about the result because all of these interiors are made by
          people who are professionals in their fields with an elegant and lucurious style and
          with premium quality materials.
        </p>
        <div className="w-full flex items-center justify-start gap-3 mt-6">
          <a href="#" className="font-medium text-[14px] text-[#e58411]">
            More Info
          </a>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Experiences
