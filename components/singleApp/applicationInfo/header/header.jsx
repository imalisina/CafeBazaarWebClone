import React from 'react';

import HeaderElements from './headerElements';

const header = ({data}) => {
    return (
        <div className="bg-white border my-4 rounded-lg text-sm py-5 px-3">
            <HeaderElements data={data}/>
        </div>
    )
}

export default header;