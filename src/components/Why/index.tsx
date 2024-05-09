const Why = () => {
  const whyItems=[
    {
      title: "Luxury facilities",
      description: "The advantage of hiring a workspace with us is that it gives you comfortable service and all-around",
    },
    {
      title: "Affordable Price",
      description: "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities.",
    },
    {
      title: "Manyh Choices",
      description: "We provide many unique work space choices so that you can choose the workspace to your liking.",
    },
  ]

  return (
    <div className="w-full flex md:floex-row flex-col md:items-center items-start justify-between md:px-[80px] px-[40px] py-[120px]">
      <span className="text-bol">Why <br />Choosing Us</span>
    </div>
  )
}

export default Why;