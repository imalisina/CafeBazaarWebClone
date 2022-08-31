import React from 'react';
import RightStart from './rightStart';
import LeftStart from './leftStart';

const footerStart = () => {
    return (
        <div className="container flex flex-wrap flex-row justify-around my-3">
                <RightStart />
                <LeftStart />
        </div>
    );
}

export default footerStart;