import React, { useEffect, useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { Link, useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { useOrder } from '../contexts/OrderProvider';
import useFetch from '../hooks/useFetch';
import Back from '../routes/Back';
import Rating from 'react-rating';
import Spinner from '../Spinner/Spinner';
import OrderCard from '../components/PlaceOrder/OrderCard';
import DeliveryForm from '../components/PlaceOrder/DeliveryForm';
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';


const SpotDetailScreen = () => {

    const [loading, setLoading] = useState(false)
    const { name } = useParams();
    const [location] = useFetch();
    const { handleOrder } = useOrder();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const history = useHistory();




    // const [order, setOrder] = useOrder()
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    const onSubmit = data => {

        fetch('https://creepy-catacombs-00703.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.name) {

                    reset();
                }
            })
        history.push('/');
        swal("Success", "Pending Admin Approval!", "Deleted");
    };



    return (
        <main className="max-w-screen-xl mx-auto px-6 my-16">
            <Back />

            {
                loading ? <Spinner /> :
                    location?.filter(item => item.name === name)?.map((spot) =>
                    (
                        <div className="flex flex-col justify-evenly h-screen">
                            <div className=" flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-5" key={spot.id}>
                                {/* left side  */}
                                <div className="order-2 md:order-1 lg:order-1 content justify-center">
                                    <h1 className="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none">{spot.name}</h1>
                                    <p className="text-center md:text-left lg:text-left text-2xl poppins text-gray-500 leading-relaxed select-none">Country: {spot.country}</p>
                                    <p className="text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none">{spot.discription}</p>
                                    <hr className="py-2" />
                                    <p className="text-center md:text-left lg:text-left text-1xl poppins text-gray-500 leading-relaxed select-none">Duration: {spot.duration}</p>
                                    {
                                        //use rating for dynamicaly
                                        < Rating
                                            readonly
                                            initialRating={spot.star}
                                            emptySymbol="far fa-star icon-color"
                                            fullSymbol="fa fa-star icon-color">
                                        </Rating>
                                    }
                                    <p className="text-center md:text-left lg:text-left text-2xl poppins text-gray-500 leading-relaxed select-none">৳{spot.cost}</p>


                                    <div className="mt-8 flex items-center justify-center md:justify-start lg:justify-start">
                                        <button className="flex items-center space-x-3 bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"

                                            onClick={() => {
                                                handleOrder(spot);
                                                // history.push('/orders')
                                                // setOrder()
                                                swal("Success", "Pending Admin Approval!", "Deleted");
                                            }}>
                                            <BsCart2 className="text-xl" />
                                            <span>Add to Choose</span>
                                        </button>
                                    </div>



                                </div>

                                {/* right side  */}
                                {/* <div className="order-1 md:order-2 lg:order-2">
                                    <img src={spot.img} className="w-3/4 md:w-3/4 lg:w-full mx-auto rounded-lg" alt="spot" />
                                </div> */}

                                <div className="order-1 md:order-2 lg:order-2">
                                    <div className="flex flex-col p-5" >
                                        <h1 className="text-2xl poppins pb-4 border-b border-gray-500 text-center text-gray-700">Submit Your Info</h1>
                                        <div className="flex flex-wrap">
                                            <form onSubmit={handleSubmit(onSubmit)} class="max-w-lg">
                                                <div class="flex flex-wrap ">
                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                                            Spot Name
                                                        </label>
                                                        <input defaultValue={spot.name} {...register("spotName")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />

                                                    </div>
                                                    <div class="w-full md:w-1/2 px-3">
                                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                                            Duration Customize
                                                        </label>
                                                        <input defaultValue={spot.duration} {...register("duration")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap ">
                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                                            Your Name
                                                        </label>
                                                        <input defaultValue={user.displayName} {...register("name")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />

                                                    </div>
                                                    <div class="w-full md:w-1/2 px-3">
                                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                                            Email
                                                        </label>
                                                        <input  {...register("email", { required: true })} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap ">
                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                                            Phone
                                                        </label>
                                                        <input  {...register("phone")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="phone" />

                                                    </div>
                                                </div>


                                                <button className="w-full px-6 py-3 rounded-lg bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500">Place order</button>
                                            </form>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                    )
            }



        </main >
    )
}

export default SpotDetailScreen;
