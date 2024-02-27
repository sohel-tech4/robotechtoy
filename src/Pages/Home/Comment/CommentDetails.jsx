import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CommentDetails = ({ Comment }) => {
    const { ProductId, customerId, customerName, customerImage, commentText, rating, timestamp } = Comment

    return (
        <div className="container md:m-10 p-5 mx-auto text-center shadow-2xl hover:border-2 rounded-lg">
            <div className="flex items-center justify-between md:px-16 px-10">
                <FaQuoteLeft className="md:text-4xl text-xl" />
                <img src={customerImage} className="w-36 p-2 rounded-full flex mx-auto" />
                <FaQuoteRight className="md:text-4xl text-xl" />
            </div>
            <h1 className="text-xl font-bold">{customerName}</h1>
            <div className="grid place-items-center py-3">
                <Rating
                    style={{ maxWidth: 120 }}
                    value={rating}
                    readOnly
                />
            </div>
            <p>{commentText}</p>

        </div>
    );
};

export default CommentDetails;