import arrow from "../../assets/images/arrow.png";

const Why = () => {
  const whyItems=[
    {
      title: "Luxury facilities",
      description: "The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities.",
    },
    {
      title: "Affordable Price",
      description: "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities.",
    },
    {
      title: "Many Choices",
      description: "We provide many unique work space choices so that you can choose the workspace to your liking.",
    },
  ]

  return (
    <div className="w-full flex md:flex-row flex-col md:items-center items-start justify-between md:px-[80px] px-[40px] py-[120px]">
      <span className="text-black font-bold text-[42px] items-center">
        Why <br />Choosing Us
      </span>
      <div className="flex md:flex-row flex-col gap-[28px] md:mt-0 mt-8">
        {whyItems.map((item) => (
          <div 
            key={item.title}
            className="flex flex-col"
          >
            <span className="font-bold text-[#1e1e1e} text-[24px]">{item.title}</span>
            <p className="mt-5 font-[300] text-[#1e1e1e] max-w-[300px]">{item.description}</p>
            <div className="flex items-center gap-4 mt-4 cursor-pointer">
              <a href="#" className="font-medium text-[14px] text-[#35E644]">
                More Info
              </a>
              <img src={arrow} alt="arrow" className="text-[35E644]" />
            </div>
          </div>))}
      </div>
    </div>
  )
}

export default Why;