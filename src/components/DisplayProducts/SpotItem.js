import React from 'react';
import { useHistory } from 'react-router-dom';

const SpotItem = ({ img, price, name }) => {
    const history = useHistory()

    const handleRoute = () => {
        history.push(`/products/${name}`);
    }
    return (
        <div className="bg-white border border-gray-200 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">

            <img className="w-64 mx-auto transform transition duration-300 hover:scale-105 h-40" src={img} alt="" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <span className="text-primary text-xl poppins px-4 py-1 inline-block ">{name}</span>
                <h2 className="text-gray-900 poppins text-2xl font-bold">৳{price}</h2>
                <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins  mt-24 transform transition duration-300 hover:scale-105" onClick={handleRoute}>Buy Now</button>
            </div>
        </div>
    )
}

export default SpotItem
