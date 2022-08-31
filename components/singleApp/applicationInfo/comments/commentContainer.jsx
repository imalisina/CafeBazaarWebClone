import React from 'react';

import Header from './header/header';
import Comment from './comment/comment';

const commentContainer = ({comments , commentCount}) => {
    return (
        <div className="bg-white border rounded-md text-sm py-5 px-3">
            <Header commentCount={commentCount} />
            <Comment comments={comments}/>
            <a className="block w-96 px-10 py-5 text-xl mx-auto text-center rounded-xl text-green-500 bg-gray-50 hover:bg-gray-100" href="">نظرات بیشتر</a>
        </div>
    )
}

export default commentContainer;