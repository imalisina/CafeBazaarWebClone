import React from 'react';

const user = ({username}) => {
    return (
        <div className="flex flex-row">
            <svg className="w-9 h-9 p-1 rounded-full text-gray-100 bg-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            <h1 className="text-lg text-gray-400 my-1 mx-3">{username}</h1>
        </div>
    )
}

export default user;