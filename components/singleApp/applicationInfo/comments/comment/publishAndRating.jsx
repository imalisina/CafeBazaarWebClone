import React from 'react';

import Rate from './info/rate';

const publishAndRating = ({publishDate , rateCount}) => {
    return (
        <div className="flex flex-row justify-between mx-2">
            <Rate rateCount={rateCount}/>
            <div className="ml-10">
                <h1 className="text-lg text-gray-400">{publishDate}</h1>
            </div>
        </div>
    );
}

export default publishAndRating;