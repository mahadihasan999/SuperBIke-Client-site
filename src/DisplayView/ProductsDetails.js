import React, { useEffect, useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { useOrder } from '../contexts/OrderProvider';
import useFetch from '../hooks/useFetch';
import Back from '../routes/Back';
import Spinner from '../Spinner/Spinner';
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';


const ProductsDetails = () => {

    const [loading, setLoading] = useState(false)
    const { name } = useParams();
    const [products] = useFetch();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user, token } = useAuth();
    const history = useHistory();

    // const [order, setOrder] = useOrder()
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    const onSubmit = data => {

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${token}`
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
                    products?.filter(item => item.name === name)?.map((product) =>
                    (
                        <div className="flex flex-col justify-evenly h-screen">
                            <div className=" flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-5" key={product.id}>
                                {/* left side  */}
                                <div className="order-2 md:order-1 lg:order-1 content justify-center">
                                    <h1 className="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none">{product.name}</h1>
                                    <p className="text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none">{product.description}</p>
                                    <hr className="py-2" />

                                    <p className="text-center md:text-left lg:text-left text-2xl poppins text-gray-500 leading-relaxed select-none">৳{product.price}</p>

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
                                                            Bike Name
                                                        </label>
                                                        <input defaultValue={product.name} {...register("bikeName")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />

                                                    </div>
                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                                            Your Name
                                                        </label>
                                                        <input defaultValue={user.displayName} {...register("name")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />

                                                    </div>

                                                </div>
                                                <div class="flex flex-wrap ">

                                                    <div class="w-full md:w-1/2 px-3">
                                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                                            Email
                                                        </label>
                                                        <input defaultValue={user.email} {...register("email", { required: true })} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                                                    </div>
                                                    <div class="w-full md:w-1/2 px-3">
                                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                                            Address
                                                        </label>
                                                        <input {...register("address", { required: true })} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap ">
                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                                            Phone
                                                        </label>
                                                        <input  {...register("phone")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />

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

export default ProductsDetails;
