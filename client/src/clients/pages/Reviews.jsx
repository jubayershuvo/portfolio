import React from 'react'
import Footer from '../layout/Footer';

function Reviews({handleScroll}) {
  const reviews = [
    {
      _id:1,
      sender:'shuvo',
      star:4.5,
      review: 'good'
    },
    {
      _id:2,
      sender:'shuvo islam',
      star:5,
      review: 'good'
    },
  ]
  return (
    <div onScroll={handleScroll} className='h-screen custom-scrollbar w-screen overflow-hidden overflow-y-auto'>
      <div className="max-w-4xl mx-auto mt-10 text-center">
      <h1 className='text-4xl text-pink-300 font-semibold border-b-2 inline-block mx-auto border-orange-500'>Reviews</h1>
      <div className="text-start px-10 min-h-screen">
      {reviews.length > 0 ?
            reviews.map((review) => (
              <div
                key={review._id}
                className="border-b mt-5 border-gray-200 dark:border-gray-700 pb-4"
              >
                <p className="text-white p-1 text-lg font-bold">{review.sender}</p>

                <div className="flex text-yellow-500">
                  {Array.from({ length: 5 }, (v, i) => {
                    const starValue = i + 1;
                    return (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill={
                          review.star >= starValue
                            ? "currentColor" // Full star
                            : review.star >= starValue - 0.5
                            ? "url(#half)" // Half star
                            : "lightgray" // Empty star
                        }
                      >
                        {/* Define a gradient for the half-star fill */}
                        <defs>
                          <linearGradient id="half" x1="0" x2="1" y1="0" y2="0">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="lightgray" />
                          </linearGradient>
                        </defs>
                        <path d="M9.049 2.927a.75.75 0 011.414 0l2.012 4.074 4.5.654a.75.75 0 01.415 1.279l-3.257 3.176.768 4.48a.75.75 0 01-1.088.79L10 14.347l-4.022 2.113a.75.75 0 01-1.088-.79l.768-4.48L2.4 8.934a.75.75 0 01.415-1.279l4.5-.654 2.012-4.074z" />
                      </svg>
                    );
                  })}
                </div>
                <p className="text-gray-600 dark:text-gray-400 pl-1">
                  {review.review}
                </p>
              </div>
            )):<h1>No reviews for this product</h1>}
      </div>
      <Footer/>
      </div>
    </div>
  )
}

export default Reviews