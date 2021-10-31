import React, { useEffect, useState } from 'react'
import AboutItem from './AboutItem'
import useFetch from '../../hooks/useFetch';
const AboutUs = () => {

    //fetching about us data
    const [location] = useFetch();
    return (
        <div className="max-w-screen-xl mx-auto my-12 px-6">
            <h1 className="text-4xl poppins pb-4 text-center">Nearby Cities</h1>

            {/* about us cards  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {location.slice(3, 6).map(item => (
                    <AboutItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default AboutUs
