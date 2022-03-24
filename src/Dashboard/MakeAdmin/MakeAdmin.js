import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';
import Heading from '../Admin/Heading';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        console.log(email)
        const user = { email };
        fetch('https://fierce-reef-43789.herokuapp.com/users/dashboard', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    swal("Admin Created Successful!", "Successfully!", "success")
                }
                else {
                    swal("Try Differnt email!", "Admin Already created !", "error")
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <Heading text="Make An Order" />
            <form onSubmit={handleAdminSubmit} className="mt-5">
                <input
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" placeholder="Create an Admin" />

                <button
                    type="submit" className="w-full px-6 py-3 rounded-lg bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500">
                    Make An Admin</button>
            </form>

        </div>
    );
};

export default MakeAdmin;