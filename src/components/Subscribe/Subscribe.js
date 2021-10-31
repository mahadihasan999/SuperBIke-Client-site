import React from 'react';
import './Subscribe.css'
const Subscribe = () => {
    return (
        <div className="flex item-center subscribe content-center justify-evenly">
            <div className="px-8 pt-6 pb-8 mb-4">
                <h2 className="text-3xl pb-4 text-white font-bold"> Sign up for Our Newsletter</h2>
                <p className="text-1xl  text-white ">Save up to 50% on tours! Get exclusive access to members only deals by email.</p>
            </div>

            <div>
                <div class="w-full max-w-xs">
                    <form class="px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Email
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Email" />
                        </div>

                        <div class="flex items-center justify-between">
                            <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Subscribe
                            </button>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Subscribe;