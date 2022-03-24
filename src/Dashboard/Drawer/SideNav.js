import React, { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SideNav = () => {
    const { user, admin, signOutUser } = useAuth();
    console.log(admin)
    const [sidenav, setSidenav] = useState(true)
    const [loading, setLoading] = useState(false)
    //toggling the side nav
    const handlenav = () => {
        setSidenav(!sidenav);
    }

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])


    // auto hide 
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1098) {
            setSidenav(false)
        } else {
            setSidenav(true)
        }
    })

    const menux =
        [
            // { id: 1, text: 'Dashboard', to: "/dashboard },
            { id: 1, text: 'Pay', to: "/dashboard/pay" },
            { id: 2, text: 'My Order', to: "/dashboard/manage-my-order" },
            { id: 3, text: 'Add Review', to: "/dashboard/addReview" },

        ]

    const menuy =
        [
            // { id: 1, text: 'Dashboard', to: "/dashboard },
            { id: 1, text: 'Manage All Orders', to: "/dashboard/manage-products" },
            { id: 2, text: 'Add New items', to: "/dashboard/add" },
            { id: 3, text: 'Make Admin', to: "/dashboard/makeAdmin" },


        ]

    return (
        <div>

            {sidenav && (
                <>
                    {admin || loading ?

                        <nav className="flex fixed flex-col w-64 bg-primary h-screen px-4">
                            <div className="flex flex-col items-center flex-wrap mt-8 pt-12">
                                <div className="">
                                    <img
                                        src={user?.photoURL}
                                        className="mx-auto w-20 h-20 rounded-full"
                                        alt={user?.displayName}
                                    />
                                </div>
                                <div className="pt-2">
                                    <span className="font-semibold text-lg text-white">{user?.displayName}</span>

                                </div>
                            </div>
                            <div>
                                <ul className="ml-4">

                                    {
                                        menuy.map(item => (
                                            <li className="flex items-center" key={item.id}>
                                                <NavLink exact to={item.to} className="p-3" activeClassName="border-l-2 border-white w-full p-3" >
                                                    <div className="flex items-center space-x-3">
                                                        {/* <span>
                                        <item.icon className="text-2xl text-white" />
                                    </span> */}
                                                        <span className="ml-2 text-white poppins">{item.text}</span>
                                                    </div>
                                                </NavLink>
                                            </li>

                                        ))}

                                </ul>

                            </div>

                            <div>

                            </div>
                            <FiLogOut className="cursor-pointer w-6 h-6 text-white-700 ml-9 mt-10" onClick={signOutUser} />
                        </nav>


                        :
                        <nav className="flex fixed flex-col w-64 bg-primary h-screen px-4">
                            <div className="flex flex-col items-center flex-wrap mt-8 pt-12">
                                <div className="">
                                    <img
                                        src={user?.photoURL}
                                        className="mx-auto w-20 h-20 rounded-full"
                                        alt={user?.displayName}
                                    />
                                </div>
                                <div className="pt-2">
                                    <span className="font-semibold text-lg text-white">{user?.displayName}</span>

                                </div>
                            </div>

                            <div>
                                <ul className="ml-4">

                                    {
                                        menux.map(item => (
                                            <li className="flex items-center" key={item.id}>
                                                <NavLink exact to={item.to} className="p-3" activeClassName="border-l-2 border-white w-full p-3" >
                                                    <div className="flex items-center space-x-3">
                                                        {/* <span>
                                        <item.icon className="text-2xl text-white" />
                                    </span> */}
                                                        <span className="ml-2 text-white poppins">{item.text}</span>
                                                    </div>
                                                </NavLink>
                                            </li>

                                        ))}

                                </ul>
                            </div>

                            <FiLogOut className="cursor-pointer w-6 h-6 text-white-700 ml-9 mt-10" onClick={signOutUser} />

                        </nav>
                    }
                </>
            )

            }
            <div>

            </div>
            {/* //menu icons  */}
            <div className="lg:hidden block fixed bottom-10 left-10 bg-white p-2 rounded-full cursor-pointer shadow-xl border border-primary" onClick={handlenav}>
                <MdOutlineArrowForwardIos className="text-2xl text-primary" />
            </div>


        </div >
    )
}

export default SideNav
