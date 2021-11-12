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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {products?.slice(0, 6).map(item => (
                    loading ? <Spinner key={item._id} /> : <SpotItem key={item._id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default Products