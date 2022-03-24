import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import SpotItem from './SpotItem';
import Spinner from '../../Spinner/Spinner';

const Products = () => {
    const [loading, setLoading] = useState(false)
    const [products] = useFetch();

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])


    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            {/* spot Menu tab  */}
            <div className="flex items-center justify-center space-x-6">
                <p className=" text-3xl poppins">Our Complete Range</p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-12">
                {products?.map(item => (
                    loading ? <Spinner key={item._id} /> : <SpotItem key={item._id} {...item} />
                ))}
            </div>
            <div className="flex justify-end items-end mt-12">
                <div className="flex flex-row items-center justify-center space-x-8">
                    <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                        <p>1</p>
                    </button>
                    <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                        <p>2</p>
                    </button>
                    <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                        <p>3</p>
                    </button>
                    <button className="flex justify-center items-center">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 6L15 12L9 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Products