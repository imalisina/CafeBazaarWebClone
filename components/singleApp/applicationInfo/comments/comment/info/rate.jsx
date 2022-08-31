import React , { useState , useEffect } from 'react';

const rate = ({rateCount}) => {

    useEffect(() => {
        rator(rateCount);
    })

    const [ rating , setRating ] = useState(0);

    const rator = (count) => {
        setRating(count);
    }

    return (
        <div className="flex flex-row text-lg text-green-500 mr-8">
            {[...Array(rating)].map((index) => {        
                return (         
                    <p key={index} className="text-xl text-green-500">&#9733;</p>      
                );
            })}
        </div>
    )
}

export default rate;