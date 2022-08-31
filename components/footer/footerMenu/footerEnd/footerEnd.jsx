import React from 'react';

import CopyRightInfo from './copyrightInfo';
import SocialNetworks from './socialNetworks';

const footerEnd = () => {
    return (
        <div className="container flex flex-row justify-between my-1">
            <CopyRightInfo />
            <SocialNetworks />
        </div>
    );
}

export default footerEnd;