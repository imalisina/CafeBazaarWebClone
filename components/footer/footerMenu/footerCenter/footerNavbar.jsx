import React from 'react';

const footerNavbar = () => {
    return (
        <nav className="mr-6 text-right flex flex-wrap flex-row justify-between">
            <ul>
                <li className="text-sm leading-10 my-2 text-gray-700 hover:text-green-600"><a href="">نصب بازار</a></li>
                <li className="text-sm leading-10 my-2 text-gray-700 hover:text-green-600"><a href="">بازی اندروید</a></li>
                <li className="text-sm leading-10 my-2 text-gray-700 hover:text-green-600"><a href="">برنامه اندروید</a></li>
            </ul>
            <ul>
                <li className="text-sm leading-10 my-2 text-gray-700 hover:text-green-600"><a href="">پنل توسعه دهندگان</a></li>
                <li className="text-sm leading-10 my-2 text-gray-700 hover:text-green-600"><a href="">فرصت های شغلی</a></li>
                <li className="text-sm leading-10 my-2 text-gray-700 hover:text-green-600"><a href="">نشان دریافت از بازار</a></li>
            </ul>
            <ul>
                <li className="text-sm leading-10 my-2 text-gray-700 hover:text-green-600"><a href="">حریم خصوصی</a></li>
                <li className="text-sm leading-10 my-2 text-gray-700 hover:text-green-600"><a href="">پشتیبانی</a></li>
                <li className="text-sm leading-10 my-2 text-gray-700 hover:text-green-600"><a href="">بلاگ بازار</a></li>
            </ul>
            <ul>
                <li className="text-sm leading-10 my-2 text-gray-700 hover:text-green-600"><a href="">درباره ما</a></li>
                <li className="text-sm leading-10 my-2 text-gray-700 hover:text-green-600"><a href="">تماس با ما</a></li>
            </ul>
            <ul className="flex flex-wrap flex-row">
                <img src="/assets/trustLogo.png" className="h-32 mx-3 py-2 border rounded-lg cursor-pointer" />
                <img src="/assets/Samandehi.png" className="h-32 mx-3 py-2 border rounded-lg cursor-pointer" />
            </ul>
        </nav>
    );
}

export default footerNavbar;