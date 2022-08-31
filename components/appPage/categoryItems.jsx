import React , { useEffect , useState } from 'react';

import axios from 'axios';
import Link from 'next/link';


const CategoryItems = ({categories}) => {

  // const [ categories , setCategories ] = useState([]);
  // const [ getReq , setGetReq ] = useState(true);

  // useEffect(() => {
  //   if ( getReq ) {
  //     axios.get(`${MAIN_URL}/category`).then(
  //       response => {
  //           setCategories(response.data);
  //           setGetReq(false);
  //       }
  //     );
  //   }
  // });

  return (
    <div className="bg-white rounded-t-md border-t border-r border-l pt-2">
    <div className="flex flex-row flex-wrap justify-between mx-5">
      <h1 className="text-lg">بروزرسانی‌های منتخب سردبیران</h1>
      <Link href="/all"><p title="بروزرسانی‌های منتخب سردبیران" className="cursor-pointer hover:text-green-600 text-sm mt-1">بیشتر<p className='inline mr-2 pt-1'>&#10095;</p></p></Link>
    </div>
    <div className="bg-white border rounded-b-md my-3">
    <div className="grid grid-cols-3 gap-4">
    {
      categories.map((category) => {
        return(
          <div className="my-2 mx-3 text-right shadow-none rounded-md border py-3 px-3 hover:shadow-lg bg-neutral-50 hover:bg-white cursor-pointer" key={category.id}>
            <div className="flex flex-row justify-between">
                <h1>{category.title}</h1>
                <p className='inline ml-3 pt-1'>&#10095;</p>
            </div>
          </div>
        )
      })
    }
    </div>
  </div>
  </div>
  );
};

export default CategoryItems;