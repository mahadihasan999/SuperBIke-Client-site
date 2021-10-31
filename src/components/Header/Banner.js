import React from 'react'

const Banner = () => {
    return (
        <section className="header-banner h-96 w-full bg-yellow-50">
            <div className="flex flex-col items-center justify-center h-full">
                <p className="text-center text-3xl md:text-4xl lg:text-3xl poppins font-semibold text-gray-600">

                    Collect moments, not things.
                </p>
                <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center">
                    <input type="text" className=" rounded-full px-4 focus:outline-none w-full bg-transparent" placeholder="Search" />
                    <button className="text-sm bg-primary py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">Search</button>
                </div>
            </div>
        </section>
    )
}

export default Banner
