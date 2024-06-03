import review1 from "../../assets/images/review4.jpg";
import review2 from "../../assets/images/review2.jpg";
import review3 from "../../assets/images/review3.jpg";
// import review4 from "../../assets/images/review4.png";
// import review5 from "../../assets/images/review5.png";
// import starts from "../../assets/images/five-stars.png"
import user1 from "../../assets/images/photo1.jpg";
import user2 from "../../assets/images/photo2.jpg";
import user3 from "../../assets/images/photo3.jpg";
import rating from "../../assets/images/five-stars.png";


const Reviews = () => {

  const reviews = [
    {
      user: "Jane_Doe",
      image: user1,
      photo: review1,
      title: "Comfortable and Stylish",
      text: "I absolutely love this chair! It's comfortable to sit in for long periods, and it adds a touch of style to my room. "
    },
    {
      user: "Michael_Jones",
      image: user2,
      photo: review2,
      title: "Great Value for Money",
      text: "For the price, this chair exceeded my expectations. It's sturdy, easy to assemble. "
    },
    {
      user: "Sarah_Smith",
      image: user3,
      photo: review3,
      title: "Perfect for Home Office",
      text: "Bought this chair for my home office, and it's been fantastic. The ergonomic design provides excellent support."
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
    <div className="flex w-full flex-col rounded">
      <div className="flex flex-col gap-2 w-full items-center justify-center">
        <span className="font-medium text-[#e58411] text-[18px] uppercase">Testimonials</span>
        <span className="font-bold text-[#1e1e1e] text-[42px]">Our Client Reviews</span>
      </div>
      <div className="flex md:flex-row flex-col w-full items-center p-[50px] justify-between mt-[60px] px-[10px] gap-10">
        {reviews.map((review) => (
          <div 
            className="relative"
            key={review.title}
          >
            <img 
              src={review.photo}
              alt={review.title} 
              className="md:w-fit w-full h-full rounded-[18px] "
            />
            <div className="bg-white absolute md:bottom-[300px] rounded-[18px] bottom-[60px] left-[5%] md:w-[324px] w-[180px] h-[260px] mx-[18px] md:h-[230px]">
              <div className="absolute bg-white rounded-full w-[86px] h-[86px] top-[-50px] left-[50%] -translate-x-1/2 grid place-items-center">
                <img 
                  src={review.image} 
                  alt="user" 
                  className="w-[70px] h-[70px] rounded-full"
                  />
              </div>
              <div className="w-full flex flex-col items-center justify-center mt-10 md:px-10 px-1 mb-[10px]">
                <span className="font-bold text-[#1e1e1e] text-[18px]">{review.user}</span>
                <span className="text-[#1e1e1e] text-[12px] mb-[22px] font-semibold">{review.title}</span>
                <span className="text-center text-[#1e1e1e] text-[14px]">{review.text}</span>
                <img src={rating} alt="Review-Rate" className="absolute bottom-[22px] md:w-[40%] w-[50%]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
