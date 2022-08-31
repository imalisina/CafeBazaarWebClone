import React from 'react';

const header = ({commentCount}) => {
    return (
        <h1 className="text-lg">نظرات کاربران - {commentCount}</h1>
    )
}

export default header;