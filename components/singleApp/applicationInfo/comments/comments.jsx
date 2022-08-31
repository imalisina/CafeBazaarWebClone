import React from 'react';

import CommentContainer from './commentContainer';

const comments = ({application}) => {
    return (
        <CommentContainer comments={application.comments} commentCount={application.commentsCount} />
    )
}

export default comments;