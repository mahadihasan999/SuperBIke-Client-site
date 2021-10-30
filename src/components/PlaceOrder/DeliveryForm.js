import { useHistory } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';
import Button from '../Form/Button';

const DeliveryForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const history = useHistory();
    const [location] = useFetch();
    const onSubmit = data => {

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.name) {
                    history.push('/order-successful');
                    alert('Order Submitted')
                    swal("Success", "Pending Admin Approval!", "Deleted");
                    reset();
                }
            })

    };
    return (
        <div className="flex flex-col mt-20 items-center p-5" >
            <h1 className="text-2xl poppins pb-4 border-b border-gray-500 text-gray-700"> Details Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">


                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Full Name
                        </label>
                        <input defaultValue={user.displayName} {...register("name")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />

                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Email
                        </label>
                        <input defaultValue={user.email} {...register("email", { required: true })} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email" />
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-2">

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">

                        </label>
                        <input defaultValue="" {...register("phone")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Phone Number" />
                    </div>


                </div>
                {/* <button
                    type="submit" className="w-full px-6 py-3 rounded-lg bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500">
                    Place Order</button> */}

                <div className="mt-8">
                    <Button text="Place Order" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default DeliveryForm;

