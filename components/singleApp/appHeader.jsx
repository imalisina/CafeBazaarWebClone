import React from "react";
import Link from "next/link";

const appHeader = ({title , category}) => {
    return (
        <div className="bg-white border rounded-lg text-sm py-5 px-3">
            <span className="text-gray-400">
                <Link href={"/app"}><p className="inline cursor-pointer text-sm mx-2 duration-1000 hover:text-green-500 hover:duration-700">برنامه ها</p></Link>
                <small className="inline text-sm mr-2 pt-1">&#10095;</small>
                <p className="inline cursor-pointer text-sm mx-2 duration-700 hover:text-green-500 hover:duration-700">{category}</p>
                <small className="inline text-sm mr-2 pt-1">&#10095;</small>
                <p className="inline text-base mx-2 text-black">{title}</p>
            </span>
        </div>
    )
} 

export default appHeader;