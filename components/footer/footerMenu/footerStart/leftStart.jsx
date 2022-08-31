import React from 'react';

const leftStart = () => {
    return (
        <div className="w-1/3 mx-3  rounded-lg border border-slate-200 flex flex-row">
            <img src="/assets/footer-download.png" className="px-2 py-6" height={"80px"} width={"120px"} />
            <div className="flex flex-col text-right mt-3">
                <h1 className="text-right leading-9">دانلود اپلیکیشن بازار</h1>
                <p className="text-right text-xs leading-3 text-gray-500">پرمخاطب‌ترین اپ‌استور (اندروید) فارسی‌زبانان</p>
                <div className="flex flex-wrap flex-row justify-center mt-6">
                    <button className="bg-white text-green-600 border hover:bg-zinc-100 border-slate-200 rounded-md mx-2 p-1">نسخهٔ اندروید</button>
                    <button className="bg-white text-green-600 border hover:bg-zinc-100 border-slate-200 rounded-md mx-2 p-1.5">نسخهٔ اندروید TV</button>
                </div>
            </div>
        </div>
    );
}

export default leftStart;