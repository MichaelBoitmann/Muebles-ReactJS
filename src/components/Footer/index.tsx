const Footer = () => {
  return (
    <div className="w-full bg-[#f7f7f7] pt-[50px] md:px-[190px] px-20 pb-[56px] mt-[50px]">
      <div className="w-full flex md:flex-row flex-col md:items-center justify-between md:gap-0 gap-8">
        <div className="flex flex-col gap-7">
          <span className="font-bold text-[1e1e1e] text-[28px]">Muebles</span>
          <p className="font-medium text-[15px] max-w-[300px] text-[#1e1e1e]">
            The advantage of hiring a workspace with us is that gives you comfortable service
            and all-around facilities.
          </p>
        </div>
        <div className="flex flex-col md:mb-0 mb-5">
          <span className="font-medium text-[17px] mb-5 text-[#f6973f]">Services</span>
          <a href="#" className="font-medium text-[15px] mb-5 text-[#1e1e1e]">Email Marketing</a>
          <a href="#" className="font-medium text-[15px] mb-5 text-[#1e1e1e]">Campaigns</a>
          <a href="#" className="font-medium text-[15px] mb-5 text-[#1e1e1e]">Branding</a>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-[17px] mb-5 text-[#f6973f]">Follow Us</span>
          <a href="#" className="font-medium text-[15px] mb-4 text-[#1e1e1e]">Facebook</a>
          <a href="#" className="font-medium text-[15px] mb-4 text-[#1e1e1e]">Twitter</a>
          <a href="#" className="font-medium text-[15px] mb-4 text-[#1e1e1e]">Instagram</a>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center justify-between w-full md:gap-0 gap-4 mt-[120px]">
        <span className="opacity-70 text-[#1e2833] text-[10px]">Copyright © 2024</span>
        <div className="flex text-[10px] items-center gap-[18px]">
          <a href="#" className="text-[#acacac]">Terms & Conditions</a>
          <a href="#" className="text-[#acacac]">Privacy Policy</a>
        </div>
      </div>  
    </div>
  )
}

export default Footer
