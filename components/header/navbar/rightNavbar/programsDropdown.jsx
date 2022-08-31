import React from 'react';
import Link from 'next/link';

const programsDropdown = () => {
    return (
        <>
        <div className="z-50 p-2 animate-fade-in-down text-right absolute top-10 w-60 text-base list-none bg-white rounded-lg divide-y divide-gray-100 shadow-lg dark:bg-gray-700">
            <Link href={"/games"}><li className="cursor-pointer rounded-md m-2 block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">بازی</li></Link>
            <Link href={"/social"}><li className="cursor-pointer rounded-md m-2 block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">شبکه اجتماعی و چت</li></Link>
            <Link href={"/digitalcurrency"}><li className="cursor-pointer rounded-md m-2 block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">ارز دیجیتال</li></Link>
        </div>
        </>
    )
}

export default programsDropdown;