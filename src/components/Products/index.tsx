import chair1 from "../../assets/images/chair1.jpg";
import chair2 from "../../assets/images/chair2.jpg";
import chair3 from "../../assets/images/chair3.jpg";
import chair4 from "../../assets/images/chair4.jpg";
import chair5 from "../../assets/images/chair5.jpg";

const Products = () => {

  const chairs = [
    { title: "Selena Dining Chair", price: "284", image: chair1 },
    { title: "Brandon Dining Chair", price: "329", image: chair2 },
    { title: "Andes Dining Chair", price: "273", image: chair3 },
    { title: "Larson Dining Chair", price: "227", image: chair4 },
    { title: "Zayne Dining Chair", price: "358", image: chair5 },
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
          </div>
        ))}
      </div>
  
    </div>
  )
}

export default Products
