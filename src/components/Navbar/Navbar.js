import React, { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { NavLink, useHistory } from "react-router-dom";
import logo from '../../assets/logo2.png';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const [changeHeader, setChangeHeader] = useState(false)
    const history = useHistory();
    const { user, signOutUser } = useAuth();


    //header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }

    //change header by scrolling
    window.addEventListener('scroll', onChangeHeader)
    return (
        <header className={changeHeader ? "subscribe fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
            <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-1">
                {/* left  */}
                <div className="flex flex-grow">
                    <img className="w-40 h-12 cursor-pointer" src={logo} alt="logo" onClick={() => history.push('/')} />
                </div>
                {/* right  */}
                {user.displayName ? (
                    <>
                        <div className="flex items-center justify-end space-x-4">
                            <NavLink to="/explore" className="text-white">Explore</NavLink>
                            <NavLink to="/dashboard" className="text-white">Dashboard</NavLink>
                            <img src={user?.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
                            <p className="poppins hidden md:block lg:block">{user.displayName}</p>
                            <FiLogOut className="cursor-pointer w-6 h-6 text-white-700" onClick={signOutUser} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex items-center justify-end space-x-6">
                            <button className="poppins text-white  " onClick={() => history.push('/signin')}>Sign In</button>
                            <button className=" bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105" onClick={() => history.push('/signup')}>Sign Up</button>
                        </div>
                    </>
                )}

            </nav>
        </header>
    )
}

export default Navbar
