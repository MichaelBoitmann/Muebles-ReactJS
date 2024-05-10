import materials1 from "../../assets/images/materials1c.png";
import materials2 from "../../assets/images/materials2b.png";
import arrow from "../../assets/images/arrow.png";

const Materials = () => {
  return (
    <div className="w-full flex md:flex-row-reverse flex-col items-center justify-between md:pl-[80px] pl-0 mb-[120px]">
      <div className="relative flex items-center md:gap-[42px] gap-0">
        <div className="absolute bg-[#d86767] rounded-tl-[20px] right-0 top-3 w-[300px] h-[300px] z-[-1] md:block hidden"></div>
        <img src={materials1} alt="materials1" />
        <img src={materials2} alt="materials2" />
      </div>  
      <div className="flex flex-col md:mt-[-60px] mt-5 md:px-0 px-8">
        <span className="font-medium text">
          Materials
        </span>
        <span className="font-bold text-[#1e1e1e] text-[42px] max-w-[450px] leading-[50px] mt-5[">
          Very Seriours Materials For Making Furniture
        </span>
      </div>    

    </div>
  )
}

export default Materials;