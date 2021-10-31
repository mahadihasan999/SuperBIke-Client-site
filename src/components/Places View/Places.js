import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import SpotItem from './SpotItem';
import Spinner from '../../Spinner/Spinner';

const Places = () => {
    const [loading, setLoading] = useState(false)
    const [location] = useFetch();

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
                <p className="active_menu_tab poppins bg-primary">15 Most Beautiful Places in the World</p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
                {location?.map(item => (
                    loading ? <Spinner key={item._id} /> : <SpotItem key={item._id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default Places