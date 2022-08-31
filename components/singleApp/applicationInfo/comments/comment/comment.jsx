import React from 'react';

import User from './user';
import PublishAndRating from './publishAndRating';

const comment = ({comments}) => {
    return (
        <>
        <div className="my-7">
            {
                comments.map((comment) => {
                    return (
                        <div className="my-10 text-right" key={comment.id}>
                            <User username={comment.username}/>
                            <PublishAndRating rateCount={comment.rateCount} publishDate={comment.date} />
                            <h1 className="mr-9 text-lg">{comment.comment}</h1>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default comment;