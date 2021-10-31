import React from 'react';
import { useHistory } from 'react-router-dom';

const SpotItem = ({ img, duration, country, cost, name }) => {
    const history = useHistory()

    const handleRoute = () => {
        history.push(`/location/${name}`);
    }
    return (
        <div className="bg-white border border-gray-200 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">{name}</span>
            <img className="w-64 mx-auto transform transition duration-300 hover:scale-105 h-40" src={img} alt="" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <p className="text-gray-500 poppins text-1xl text-center">{country}</p>
                <p className="text-gray-500 poppins text-sm text-center">{duration}</p>
                <h2 className="text-gray-900 poppins text-2xl font-bold">${cost}</h2>
                <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" onClick={handleRoute}>Booking Now</button>
            </div>
        </div>
    )
}

export default SpotItem
