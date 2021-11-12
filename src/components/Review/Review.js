import React, { useEffect, useState } from 'react';
import useReview from '../../hooks/useReview';
import Spinner from '../../Spinner/Spinner';
import AllReview from './AllReview';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Review = () => {
    const [loading, setLoading] = useState(false)
    const [review] = useReview()

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            {/* spot Menu tab  */}
            <div className="flex items-center justify-center space-x-6">
                <p className=" text-3xl poppins">Recently Added Review</p>

            </div>
            <Carousel responsive={responsive} className="m-10">
                {review?.map(item =>
                (
                    loading ? <Spinner key={item._id} /> : <AllReview key={item._id} {...item}
                    />
                ))
                }

            </Carousel>;
        </section>
    )
}

export default Review