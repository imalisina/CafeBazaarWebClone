import React , { useEffect , useState , forwardRef } from 'react';

import axios from 'axios';
import Link from 'next/link';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


const FashionApps = ({fashion}) => {

  // const [ apps , setApps ] = useState([]);
  // const [ getReq , setGetReq ] = useState(true);

  // useEffect(() => {
  //   if ( getReq ) {
  //     axios.get(`${MAIN_URL}/fashion`).then(
  //       response => {
  //           setApps(response.data);
  //           setGetReq(false);
  //       }
  //     );
  //   }
  // });

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
      <div className="bg-white rounded-t-md border-t border-r border-l pt-2">
      <div className="flex flex-row flex-wrap justify-between mx-5">
        <h1 className="text-lg">روی خط مد و لباس</h1>
      </div>
      <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={10}
      centeredSlides={false}
      slidesOffsetAfter={300}
      direction='horizontal'
      className="bg-white border rounded-b-md my-3"
    >
      <div>
      {
        fashion.map((app) => {
          return(
            <SwiperSlide title={app.title} className="truncate my-2 mx-3 text-right shadow-none rounded-md py-4 px-3 hover:shadow-lg bg-white cursor-pointer" key={app.id}>
                <Link href={`app/${app.slugCat}/${app.id}`} passHref>
                  <Button>
                  <img src={app.path} width="128px" height="128px" className="text-center mx-auto rounded-xl my-2" />
                  <div className="truncate text-sm">{app.title}</div>
                  <p className="text-xs text-zinc-500">{ app.category }</p>
                  </Button>
                </Link>
              </SwiperSlide>
          )
        })
      }
      </div>
    </Swiper>
    </div>
  );
};

export default FashionApps;