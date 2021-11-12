import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Spinner from '../../Spinner/Spinner';
import ExploreAllProduct from './ExploreAllProduct';
import Heading from '../../Dashboard/Admin/Heading';

const Explore = () => {
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
        < >
            <section id="explore" className="my-12 max-w-screen-xl mx-auto px-6 "

            >

                {/* spot Menu tab  */}
                <div className="flex items-center justify-center space-x-6 mt-20">
                    <Heading text="Explore All Bike" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    {products?.map(item => (
                        loading ? <Spinner key={item._id} /> : <ExploreAllProduct key={item._id} {...item} />
                    ))}
                </div>
            </section>
        </>

    )
}

export default Explore