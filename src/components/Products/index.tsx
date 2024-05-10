import chair1 from "../../assets/images/chair1.jpg";
import chair2 from "../../assets/images/chair2.jpg";
import chair3 from "../../assets/images/chair3.jpg";
import chair4 from "../../assets/images/chair4.jpg";
import chair5 from "../../assets/images/chair5.jpg";
import rating from "../../assets/images/five-stars.png";

import arrow from "../../assets/images/arrow1.png";

const Products = () => {

  const chairs = [
    { title: "Selena Chair", price: "284", image: chair1 },
    { title: "Brandon Chair", price: "329", image: chair2 },
    { title: "Andes Chair", price: "273", image: chair3 },
    { title: "Larson Chair", price: "227", image: chair4 },
    { title: "Zayne Chair", price: "358", image: chair5 },
  ]

  return (
    <div className="w-full bg-[#f7f7f7] py-[50px] md:px-[120px] px-[40px} flex flex-col items-center justify-center">
      <span className="font-bold text-[42px] text-[#1e1e1e]">Best Selling Products</span>
      <div className="w-full flex md:flex-row flex-col items-center justify-between mt-10 gap-10">
        {chairs.map((chair) => (
          <div key={chair.title} className="bg-white w-full rounded-[20px] flex flex-col items-center justify-center">
            <div className="grid place-items-center w-full bg-[@fafafa]">
              <img src={chair.image} alt={chair.title} />
            </div>
            <div className="w-full px-[20px] pb-[27px] pt-4 flex flex-col">
              <span className="text-[#8d8d8d]">Chair</span>
              <span className="font-semibold text-[#0d1b39] text-[17px] my-[5px]">
                {chair.title}
              </span>
              <img src={rating} alt="Product-Rate" className="w-[30%]" />
              <div className="w-full flex items-center justify-between mt-7">
                <span className="font-semibold text-[22px] text-[#0d1b39]">
                  $ {chair.price}
                </span>
                <div className="rounded-full grid place-items-center bg-[#0d1b39] w-[48px] h-[48px] cursor-pointer">
                  <span className="text-white mt-[-1px] text-[35px]">+</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center gap-3 mt-14">
        <a href="#" className="font-medium text-[18px] text-[#e58411]">
          View All
        </a>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  )
}

export default Products
