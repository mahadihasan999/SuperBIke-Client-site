import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="footer-1 bg-gray-100 py-8 sm:py-12">
                <div class="container mx-auto px-4">
                    <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                            <h5 class="text-xl font-bold mb-6">Features</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Top Spot</Link>
                                </li>
                                <li class="mb-2">
                                    <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Random feature</Link>
                                </li>
                                <li class="mb-2">
                                    <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Best Place</Link>
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
                                    <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">About Travel.com</Link>
                                </li>
                                <li class="mb-2">
                                    <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Rewards</Link>
                                </li>
                                <li class="mb-2">
                                    <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another resource</Link>
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

                    </div>


                </div>
            </footer>
        </div>
    );
};

export default Footer;