import React from 'react';
import '../Spinner/Spinner.css'
const Spinner = () => {
    return (
        <div>
            <div class="flex items-center justify-center mt-10 ">
                <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Spinner;