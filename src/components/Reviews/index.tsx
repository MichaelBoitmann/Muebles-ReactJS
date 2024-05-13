import review1 from "../../assets/images/review1.png";
import review2 from "../../assets/images/review2.png";
import review3 from "../../assets/images/review3.png";
// import review4 from "../../assets/images/review4.png";
// import review5 from "../../assets/images/review5.png";
// import starts from "../../assets/images/five-stars.png"
import user1 from "../../assets/images/photo1.jpg";
import user2 from "../../assets/images/photo2.jpg";
import user3 from "../../assets/images/photo3.jpg";


const Reviews = () => {

  const reviews = [
    {
      user: "Jane_Doe",
      image: user1,
      photo: review1,
      title: "Comfortable and Stylish",
      text: "I absolutely love this chair! It's comfortable to sit in for long periods, and it adds a touch of style to my room. Highly recommended."
    },
    {
      user: "Michael_Jones",
      image: user2,
      photo: review2,
      title: "Great Value for Money",
      text: "For the price, this chair exceeded my expectations. It's sturdy, easy to assemble, and looks much more expensive than it actually is. Very satisfied with my purchase."
    },
    {
      user: "Sarah_Smith",
      image: user3,
      photo: review3,
      title: "Perfect for Home Office",
      text: "Bought this chair for my home office, and it's been fantastic. The ergonomic design provides excellent support, and the adjustable features make it easy to customize for comfort. Couldn't be happier."
    },
    // {
    //   user: "Emily_Wilson",
    //  image: user4,
    //   photo: review4,
    //   title: "Sleek and Modern",
    //   text: "This chair fits perfectly with the modern aesthetic of my apartment. The sleek design and neutral color complement any decor. Plus, it's surprisingly comfortable!"
    // },
    // {
    //   user: "David_Brown",
    //  image: user5,
    //   photo: review5,
    //   title: "Easy Assembly",
    //   text: "Assembly was a breeze with clear instructions. The chair feels sturdy and well-made. It's been a great addition to my home office setup."
    // },
    
  ]

  return (
    <div className="flex w-full flex-col mb-[50px]">
      <div className="flex flex-col gap-2 w-full items-center justify-center">
        <span className="font-medium text-[#e58411] text-[18px] uppercase">Testimonials</span>
        <span className="font-bold text-[#1e1e1e] text-[42px]">Our Client Reviews</span>
      </div>
      <div className="flex md:flex-row flex-col w-full items-center justify-between mt-[60px] px-[130px] gap-10">
        {reviews.map((review) => (
          <div 
            className="relative"
            key={review.title}
          >
            <img 
              src={review.photo}
              alt={review.title} 
              className=" w-full h-full rounded-[18px]"
            />
            <div className="bg-white absolute md:bottom-[98px] bottom-[60px] left-[5%] md:w-[300px] w-[180px] mx-[8px] md:h-[280px] rounded-[18px]">
              <div className="absolute bg-white rounded-full w-[66px] h-[66px] top-[-60px] left-[50%] -translate-x-1/2 grid place-items-center">
                <img 
                  src={review.image} 
                  alt="user" 
                  className="rounded-full"
                  />
              </div>
              <div className="w-full flex flex-col items-center justify-center mt-10 md:px-10 px-1">
                <span className="font-bold text-[#1e1e1e] text-[18px]">{review.user}</span>
                <span className="text-[#1e1e1e] text-[12px] mb-[22px] font-semicolon">{review.title}</span>
                <span className="text-center text-[#1e1e1e] text-[14px]">{review.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
