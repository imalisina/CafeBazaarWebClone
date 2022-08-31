import React from 'react';

import Header from './header/header';
import Main from './main/main';

const ratingResults = ({ratingRes}) => {
    return (
        <div className="bg-white border rounded-md text-sm py-5 px-3 mb-3">
            <Header ratingRes={ratingRes}/>
            <br />
            <br />
            <br />
            <Main />
        </div>
    )
}

export default ratingResults;