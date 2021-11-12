
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import swal from 'sweetalert';
import useOrder from '../../hooks/useOrder'
import Heading from './Heading';
import useAuth from '../../hooks/useAuth';
const MyOrder = () => {

    const [orders, setOrder] = useOrder()
    const { user } = useAuth();
    //handle delete 

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to Delete')
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0)
                        swal("Deleted", "Delete Successfully!", "Deleted");
                    const remainingUsers = orders.filter(user => user._id !== id)
                    setOrder(remainingUsers)
                })
        }



    }
    return (
        <div>
            {/* heading   */}
            <Heading text="Manage My Order" />
            {/* product s  */}

            <div className="flex flex-col my-8">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden sm:rounded-lg shadow-md">
                            <table className="min-w-full">
                                <thead className="bg-primary poppins">
                                    <tr>
                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                                            Bike Name
                                        </th>
                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                                            Customer Name
                                        </th>
                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                                            Email
                                        </th>

                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                                            Contact
                                        </th>
                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                                            Address
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">Action</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders?.filter(item => item.name === user.displayName)?.map((item) =>
                                    (
                                        <tr className="bg-white border-b poppins" key={item._id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {item.bikeName}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {item.name}
                                            </td>
                                            <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                                {item.email}
                                            </td>

                                            <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                                {item.phone}
                                            </td>
                                            <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                                {item.address}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center">
                                                <div className="flex items-center justify-center space-x-3">
                                                    <Link to={`/dashboard/edit/${item._id}`}>
                                                        <FiEdit className="cursor-pointer text-2xl text-green-600" />
                                                    </Link>
                                                    <AiOutlineDelete className="cursor-pointer text-2xl text-red-600" onClick={() => handleDelete(item._id)} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyOrder