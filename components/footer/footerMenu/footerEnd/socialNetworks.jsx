import React from 'react';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialNetworks = () => {
    return (
        <div>
            <LinkedInIcon className="text-gray-500 cursor-pointer hover:text-black text-3xl mx-3" />
            <InstagramIcon className="text-gray-500 cursor-pointer hover:text-black text-3xl mx-3" />
            <TwitterIcon className="text-gray-500 cursor-pointer hover:text-black text-3xl mx-3"/>
        </div>
    )
}

export default socialNetworks;