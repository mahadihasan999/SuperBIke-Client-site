import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import logo from '../../assets/logo2.png';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi';
const Footer = () => {
    const history = useHistory()
    return (

        <footer class="footer-1 bg-gray-100 py-8 sm:py-12">
            <div class="container mx-auto px-4">
                <div class="sm:flex sm:flex-wrap justify-center sm:-mx-4 md:py-4">
                    <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                        <h5 class="text-xl font-bold mb-6">Features</h5>
                        <ul class="list-none footer-links">
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Top Bike</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Random feature</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Best Bike</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">User Login</Link>
                            </li>

                        </ul>
                    </div>
                    <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                        <h5 class="text-xl font-bold mb-6">News</h5>
                        <ul class="list-none footer-links">
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">About Superbike.com</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Big Sell</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Customer</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Final resource</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <h5 class="text-xl font-bold mb-6">About</h5>
                        <ul class="list-none footer-links">
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <h5 class="text-xl font-bold mb-6">Help</h5>
                        <ul class="list-none footer-links">
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <img className="w-40 h-12 cursor-pointer" src={logo} alt="logo" onClick={() => history.push('/')} />



                        <div className="flex pt-5">
                            <FiFacebook className=" text-primary cursor-pointer w-6 h-6 mx-1 text-white-700" />
                            <FiInstagram className="text-primary cursor-pointer mx-1  w-6 h-6 text-white-700" />
                            <FiTwitter className="text-primary cursor-pointer mx-1  w-6 h-6 text-white-700" />
                            <FiLinkedin className="text-primary cursor-pointer mx-1  w-6 h-6 text-white-700" />
                            <FiYoutube className="text-primary cursor-pointer mx-1  w-6 h-6 text-white-700" />
                            <FiTwitter className="text-primary cursor-pointer mx-1  w-6 h-6 text-white-700" />

                        </div>

                    </div>

                </div>


            </div>
        </footer>
    );
};

export default Footer;