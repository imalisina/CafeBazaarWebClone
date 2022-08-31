import React from 'react';

import AppHeader from './appHeader';
import Header from './applicationInfo/header/header';
import Main from './applicationInfo/main/main';
import RatingResults from './applicationInfo/ratingResults/ratingResults';
import Comments from './applicationInfo/comments/comments';

const singleAppContainer = ({application}) => {
    return (
        <div className="mx-24">
            <AppHeader title={application.title} category={application.category}/>
            <Header data={application} />
            <Main assets={application.data} />
            <RatingResults ratingRes={application.rating}/>
            <Comments application={application} />
        </div>
    )
}

export default singleAppContainer;