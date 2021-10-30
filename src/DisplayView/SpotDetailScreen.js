import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { useOrder } from '../contexts/OrderProvider';
import useFetch from '../hooks/useFetch';
import Back from '../routes/Back';

const SpotDetailScreen = () => {
    const [quantity] = useState(1)
    // const [orderPrice, setOrderPrice] = useState()
    const [disabled, setDisabled] = useState(false)
    const { name } = useParams();
    const [location] = useFetch();
    const { handleOrder } = useOrder();
    const history = useHistory();


    return (
        <main className="max-w-screen-xl mx-auto px-6 my-16">
            <Back />
            {

                location?.filter(item => item.name === name)?.map((spot) => (
                    <div className="flex flex-col justify-center items-center h-screen">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10" key={spot.id}>
                            {/* left side  */}
                            <div className="order-2 md:order-1 lg:order-1 flex flex-col justify-center">
                                <h1 className="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none">{spot.name}</h1>
                                <p className="text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none">{spot.country}</p>

                                {/* price and quantity  */}


                                {/* add button  */}
                                <div className="mt-8 flex items-center justify-center md:justify-start lg:justify-start">
                                    <button disabled={disabled} className={disabled ? "opacity-30 flex items-center space-x-3 bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105" : "flex items-center space-x-3 bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"} onClick={() => {
                                        spot['quantity'] = quantity;
                                        spot.cost = spot.cost * quantity;
                                        handleOrder(spot);
                                        setDisabled(true);
                                        swal("Wow!!!", "Your order has added to the cart", "success")
                                        history.push('/orders')
                                        console.log(spot)
                                    }}>
                                        <BsCart2 className="text-xl" />
                                        <span>{disabled ? "Added" : "Add to Cart"}</span>
                                    </button>
                                </div>

                            </div>
                            {/* right side  */}
                            <div className="order-1 md:order-2 lg:order-2">
                                <img src={spot.img} className="w-3/4 md:w-3/4 lg:w-full mx-auto " alt="spot" />
                            </div>
                        </div>
                    </div>
                ))}

        </main>
    )
}

export default SpotDetailScreen
