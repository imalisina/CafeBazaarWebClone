import React from 'react';

const header = ({ratingRes}) => {
    return (
        <div className="float-right bg-gray-50 rounded-2xl text-base px-4 py-3">
            <h1><span className="text-green-500">&#9733;</span>{ratingRes} از ۵</h1>
        </div>
    )
}

export default header;