import materials1 from "../../assets/images/materials1d.png";
import materials2 from "../../assets/images/materials2b.png";
import arrow from "../../assets/images/arrow1.png";

const Materials = () => {
  return (
    <div className="w-full flex md:flex-row-reverse flex-col items-center justify-between md:pl-[80px] pl-0 mb-[120px]">
      <div className="relative flex items-center md:gap-[42px] gap-0">
        <div className="absolute bg-[#d86767] rounded-tl-[20px] right-5 top-3 w-[100px] h-[00px] z-[-1] md:block hidden"></div>
        <img src={materials1} alt="materials1" />
        <img src={materials2} alt="materials2" className="mr-10 rounded-[20px]"/>
      </div>  
      <div className="flex flex-col md:mt-[-60px] mt-5 md:px-0 px-8">
        <span className="font-medium text-[#e58411] text-[42px]">
          Materials
        </span>
        <span className="font-bold text-[#1e1e1e] text-[42px] max-w-[450px] leading-[50px] mt-5[">
          Very Seriours Materials For Making Furniture
        </span>
        <p className="mt-5 max-w-[500px]">
          Because Muebles was very serious about designing furniture for your environment, using a
          sophisticated and elegant parts, consumed by our professional designer at a relatively
          affordable prices.
        </p>
        <div className="w-full flex items-center justify-start gap-3 mt-6">
          <a href="#" className="font-medium text-[14px] text-[#e58411]">
            More Info
          </a>
          <img src={arrow} alt="arrow" />
        </div>
      </div>    

    </div>
  )
}

export default Materials;