import React , { useState } from 'react';

import TranslateDropdown from './translateDropdown';

const leftNavbar = () => {

    const [ dropDown , toggleDropDown ] = useState(false);

    return (
        <>
        <div className="flex relative items-center ml-24">
            {/* Search Bar */}
            <div class="flex absolute inset-y-0 right-0 items-center pr-1 pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" className="p-0.5 pr-7 h-8 w-48 text-xs bg-zinc-50 rounded-md border border-slate-300 focus:outline-0 focus:bg-white hover:bg-white" placeholder='جستجو در بازار' />
            {/* Search Bar */}

            {/* Account Section */}
            <button>
                <svg class="w-9 h-9 hover:border-2 mx-2 px-1.5 hover:px-1 rounded-full bg-zinc-100 text-zinc-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            </button>
            {/* Account Section */}

            {/* Download Bazaar */}
            <button className="bg-green-600 font-thin text-white px-3.5 py-1.5 rounded-lg">دانلود بازار</button>
            {/* Download Bazaar */}

            {/* Translate To English */}
            <button className="relative" onClick={() => toggleDropDown(!dropDown)}>
                <svg className="w-8 h-8 mr-3 rounded-md box-border hover:px-1 hover:py-1 hover:border-2 px-1.5 py-1.5 bg-zinc-50 text-zinc-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                {
                    dropDown
                    ? <TranslateDropdown />
                    : ''
                }
            </button>
            {/* Translate To English */}
        </div>
        </>
    )
}

export default leftNavbar;