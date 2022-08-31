import React  from 'react';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const main = ({assets}) => {
    return (
        <>
        <div className="bg-white rounded-t-md border-t border-r border-l pt-2">
            <div className="flex flex-row flex-wrap justify-between mx-5">
                <h1 className="text-lg">تصاویر برنامه</h1>
            </div>
            <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={10}
            centeredSlides={false}
            slidesOffsetAfter={300}
            width={2000}
            direction='horizontal'
            className="bg-white border rounded-b-md my-3">
            <div>
            {
              assets.map((asset, index) => {
                return(
                    <SwiperSlide className="my-2 mx-3 shadow-none hover:shadow-lg cursor-pointer" key={index}>
                        <img className="w-72 h-96 rounded-xl" src={asset} />
                    </SwiperSlide>
                )
              })
            }
            </div>
            </Swiper>
        </div>
        </>
    )
}

export default main;
