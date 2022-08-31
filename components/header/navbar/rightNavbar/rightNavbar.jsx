import React , { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import ProgramsDropdown from './programsDropdown';

const rightNavbar = () => {

    const [ programs , togglePrograms ] = useState(false);
    const [ appActive , setAppActive ] = useState("");
    const [ movieActive , setMovieActive ] = useState("");
    const [ developerActive , setDeveloperActive ] = useState("");
    const [ helpActive , setHelpActive ] = useState("");
    const activeClass = "border-b-4 border-green-600 px-2 h-7 rounded-md text-slate-900"

    useEffect(() => {
        activateClass();
    });

    const activateClass = () => {
        const { pathname } = Router;
        switch ( pathname ) {
            case "/app":
                setAppActive(activeClass);
                setMovieActive("");
                setDeveloperActive("");
                setHelpActive("");
                break;
            case "/movies":
                setMovieActive(activeClass);
                setAppActive("");
                setDeveloperActive("");
                setHelpActive("");
                break;
            case "/developers":
                setDeveloperActive(activeClass);
                setAppActive("");
                setMovieActive("");
                setHelpActive("");
                break;
            case "/help":
                setHelpActive(activeClass);
                setAppActive("");
                setMovieActive("");
                setDeveloperActive("");
                break;
            default:
                setAppActive(activeClass);
                setMovieActive("");
                setDeveloperActive("");
                setHelpActive("");
        }
    }

    return (
        <div className="flex flex-wrap flex-row items-center order-first mr-20">
            {/* Bazaar Logo */}
            <Link href="/app"><img src="/assets/logo/bazaar-logo.svg" className="duration-500 hover:duration-500 hover:brightness-110 cursor-pointer" height="90px" width="90px" /></Link>
            {/* Bazaar Logo */}
        
            {/* Navigation Menu */}
            <ul className="relative flex flex-row flex-wrap mx-10 text-slate-600">
                <Link href={"/app"}><li onClick={() => togglePrograms(!programs)} className={`${appActive} flex flex-wrap flex-row text-md mx-4 cursor-pointer hover:text-slate-900`}>برنامه<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></li></Link>
                {
                    programs
                    ? <ProgramsDropdown />
                    : ''
                }
                <Link href="/movies"><li className={`${movieActive} text-md mx-4 cursor-pointer hover:text-slate-900`}>فیلم و سریال</li></Link>
                <Link href="/developers"><li className={`${developerActive} text-md mx-4 cursor-pointer hover:text-slate-900`}>پنل توسعه دهندگان</li></Link>
                <Link href="/help"><li className={`${helpActive} text-md mx-4 cursor-pointer hover:text-slate-900`}>پشتیبانی</li></Link>
            </ul>
            {/* Navigation Menu */}
        </div>
    )
}

export default rightNavbar;