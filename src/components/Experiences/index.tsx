
import arrow from "../../assets/images/arrow.png";
import experiences from "../../assets/images/sofa1.png";

const Experiences = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center md:gap-48 gap-20 mt-[240px] mb-[120px]">
      <div className="relative">
        <div className="absolute bg-[#f7f7f7] rounded-tr-[20px] left-0 top-[-66px] w-[450px] h-[300px] z-[-1]"></div>
        <img src={experiences} alt="experiences" />
        <div className="absolute bg-[#f7f7f7] rounded-[20px] right-0 top-[45%] -translate-y-1/2 translate-x-[50px] w-[450px] h-[300px] z-[-1]"></div>
      </div>

    </div>
  );
};

export default Experiences
