import React from 'react';
import Rating from 'react-rating';

const AllReview = ({ customerName, rating, description }) => {
    return (
        <div className="bg-white border border-gray-200 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <div className="flex flex-col items-center my-3 space-y-3">
                <span className="text-primary text-xl poppins px-4 py-1 inline-block ">{customerName}</span>

                {
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star text-yellow-500"
                        fullSymbol="fa fa-star text-yellow-500"
                    />
                }
                <p className="text-gray-900 poppins text-1xl italic">"{description}"</p>
            </div>
        </div>
    )
}

export default AllReview
