import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './slider-banner.ui.css';

export function SliderBanner() {
  return (
    <div className="flex gap-10 max-h-[450px]">
      <div className="slider-banner">
        <Swiper
          modules={[Pagination, EffectFade, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          effect="fade"
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
          <div
          className=" bg-center bg-cover rounded"
          style={{
            height:"450px" ,
            backgroundImage: `url('https://the-tech.kz/wp-content/uploads/2024/04/378516037_338027448658224_8911445700177030421_n.jpg')`,
          }}
        >
          <h3 className='text-pc-100 font-bold'>
          4 Custom React Hooks Every Developer Should Know
          </h3>
        </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/f7/a8/9d/f7a89ddb7fc4dfe1dd704f0c51a5b0f5.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/f4/05/e9/f405e94ace11d60ff68176590646eb25.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/736x/95/2b/5a/952b5a371c5e0e411afaaca340f7ab8d.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='flex flex-col justify-between'>
        <div
          className="h-[45%] bg-center bg-cover rounded slider-card"
          style={{
            backgroundImage: `url('https://the-tech.kz/wp-content/uploads/2024/04/378516037_338027448658224_8911445700177030421_n.jpg')`,
          }}
        >
          <h3 className='text-pc-100 font-bold'>
          4 Custom React Hooks Every Developer Should Know
          </h3>
        </div>
        <div
          className="h-[45%] bg-center bg-cover rounded slider-card"
          style={{
            backgroundImage: `url('https://the-tech.kz/wp-content/uploads/2024/04/378516037_338027448658224_8911445700177030421_n.jpg')`,
          }}
        >
          <h3 className='text-pc-100 font-bold'>
          4 Custom React Hooks Every Developer Should Know
          </h3>
        </div>
      </div>
    </div>
  );
}
