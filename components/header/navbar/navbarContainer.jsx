import React from 'react';

import RightNavbar from './rightNavbar/rightNavbar';
import LeftNavbar from './leftNavbar/leftNavbar';

const navbarContainer = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white h-20 py-1.5 shadow-md container flex flex-wrap flex-row justify-between items-center">
            <RightNavbar />
            <LeftNavbar />
        </div>
    )
}

export default navbarContainer;
