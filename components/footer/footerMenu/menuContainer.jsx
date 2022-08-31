import React from 'react';

import FooterStart from './footerStart/footerStart';
import FooterCenter from './footerCenter/footerCenter';
import FooterEnd from './footerEnd/footerEnd';

import EndDivider from '../../divider/endDivider';
import Divider from '../../divider/divider';

const menuContainer = () => {
    return (
        <div className="bg-white px-16 z-50 shadow-inner py-11">
            <FooterStart />
            <Divider />
            <FooterCenter />
            <EndDivider />
            <FooterEnd />
        </div>
    )
}

export default menuContainer;