import React from 'react';

const leftSection = ({data}) => {
    return (
        <div className="flex flex-wrap flex-row justify-center mx-2">
            <div className="mx-2 bg-slate-50 rounded-lg text-black py-4 px-2">
                <h1 className="text-center">{data.downloads}</h1>
                <p className="text-center mx-auto text-xs mt-3 text-slate-400">نصب فعال</p>
            </div>
            <div className="mx-2 bg-slate-50 rounded-lg text-black py-4 px-2">
                <h1 className="text-center">{data.rating}&#9734;</h1>
                <p className="text-center mx-auto text-xs mt-3 text-slate-400">{data.commentsCount}</p>
            </div>
            <div className="mx-2 bg-slate-50 rounded-lg text-black py-4 px-2">
                <h1 className="text-center">{data.category}</h1>
                <p className="text-center mx-auto text-xs mt-3 text-slate-400">دسته بندی</p>
            </div>
            <div className="mx-2 bg-slate-50 rounded-lg text-black py-4 px-2">
                <h1 className="text-center">{data.size}</h1>
                <p className="text-center mx-auto text-xs mt-3 text-slate-400">حجم</p>
            </div>
        </div>
    )   
}

export default leftSection;