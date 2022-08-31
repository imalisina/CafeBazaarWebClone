import React from 'react';

const rightSection = ({data}) => {
    return (
        <div className="flex flex-row flex-wrap">
            <img className="mb-16 pb-5 rounded-md" src={data.path} width="128px" height="100px" />
            <div className="mr-5">
                <h1 className="text-2xl mb-4">{data.title}</h1>
                <h4 className="text-base text-gray-800 my-4">{data.title}</h4>
                <p className="text-gray-500 text-base my-1">{data.version}</p>
                <p className="text-gray-500 text-base my-1">با پرداخت درون برنامه ای</p>
                <button className="bg-green-600 hover:bg-green-700 text-lg text-white rounded-lg mt-4 px-10 py-2">نصب از بازار</button>
            </div>
        </div>
    )
}

export default rightSection;