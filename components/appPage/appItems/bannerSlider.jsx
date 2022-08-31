import React , { useEffect , useState , forwardRef } from 'react';

import axios from 'axios';
import Link from 'next/link';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


const BannerSlider = ({banners}) => {
  const Button = forwardRef(({ children, href, onClick }, ref) => (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      className="button"
    >
      {children}
    </a>
  ));

  return (
      <>
      <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={3}
      centeredSlides={false}
      slidesOffsetAfter={300}
      direction='horizontal'
      className="bg-white border rounded-md my-3"
    >
      <div>
      {
        banners.map((banner) => {
          return(
            <SwiperSlide className="h-auto text-right shadow-none  brightness-90 hover:brightness-100 rounded-md bg-white my-2 mx-2 cursor-pointer" key={banner.id}>
                <Link href={`app/${banner.slugCat}/${banner.id}`} passHref>
                  <Button>
                  <img src={banner.path} width="450px" height="200px" className="rounded-xl" />
                  </Button>
                </Link>
              </SwiperSlide>
          )
        })
      }
      </div>
    </Swiper>
    </>
  );
};

export default BannerSlider;