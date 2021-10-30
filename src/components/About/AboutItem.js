import React from 'react'

const AboutItem = ({ id, img, star, name, country }) => {
    return (
        <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
            {/* image  */}
            <div className="overflow-hidden rounded-2xl ">
                <img className="transform transition duration-700 hover:scale-125" src={img} alt="" />
            </div>
            {/* other info  */}
            <div className="flex mt-6 space-x-3 ">
                {/* icon  */}

                {/* description  */}
                <div className="flex flex-col space-y-3">
                    <h1 className="text-xl text-gray-800 poppins">{name}</h1>
                    <p className="text-sm text-gray-500 poppins">{country}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutItem
