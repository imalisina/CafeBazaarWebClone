import React from 'react';

import RightSection from './sections/rightSection';
import LeftSection from './sections/leftSection';

const headerElements = ({data}) => {
    return (
        <div className="h-56 flex flex-wrap flex-row justify-between">
            <div>
                <RightSection data={data}/>
            </div>
            <div>
                <LeftSection data={data}/>
            </div>
        </div>
    )
}

export default headerElements;