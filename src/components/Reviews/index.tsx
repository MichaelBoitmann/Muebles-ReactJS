import React from 'react'

const Reviews = () => {

  const reviews = [
    {
      "user": "John_Doe",
      "image": "https://example.com/john_doe.jpg",
      "title": "Comfortable and Stylish",
      "text": "I absolutely love this chair! It's comfortable to sit in for long periods, and it adds a touch of style to my room. Highly recommended."
    },
    {
      "user": "Sarah_Smith",
      "image": "https://example.com/sarah_smith.jpg",
      "title": "Great Value for Money",
      "text": "For the price, this chair exceeded my expectations. It's sturdy, easy to assemble, and looks much more expensive than it actually is. Very satisfied with my purchase."
    },
    {
      "user": "Michael_Jones",
      "image": "https://example.com/michael_jones.jpg",
      "title": "Perfect for Home Office",
      "text": "Bought this chair for my home office, and it's been fantastic. The ergonomic design provides excellent support, and the adjustable features make it easy to customize for comfort. Couldn't be happier."
    },
    {
      "user": "Emily_Wilson",
      "image": "https://example.com/emily_wilson.jpg",
      "title": "Sleek and Modern",
      "text": "This chair fits perfectly with the modern aesthetic of my apartment. The sleek design and neutral color complement any decor. Plus, it's surprisingly comfortable!"
    },
    {
      "user": "David_Brown",
      "image": "https://example.com/david_brown.jpg",
      "title": "Easy Assembly",
      "text": "Assembly was a breeze with clear instructions. The chair feels sturdy and well-made. It's been a great addition to my home office setup."
    }
    
  ]

  return (
    <div className="flex -w-full flex-col">
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
            <img src={review.image} alt={review.title} className="md:w-fit w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
